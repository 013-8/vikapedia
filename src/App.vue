<script lang="ts">
export default {
    data() {
        return {
            madnessLevel: 0,
            soundBites: [
                new Audio('/sound_bites/mad.mp3'),
                new Audio('/sound_bites/madness.mp3'),
                new Audio('/sound_bites/off.mp3'),
                new Audio('/sound_bites/slowmo_hjerneskade.mp3'),
                new Audio('/sound_bites/this_is_lillevannet.mp3'),
                new Audio('/sound_bites/this_is_madness.mp3')
            ],
            isDemon: false
        }
    },
    methods: {
        playAudio() {
            if (!this.soundBites) return
            this.soundBites[Math.floor(Math.random() * this.soundBites.length)].play()
            this.madnessLevel++
        },
        resetMadness() {
            this.madnessLevel = 0
        },
        engageDemonMode() {
            this.isDemon = this.madnessLevel % 3 === 0
            return true
        }
    }
}
</script>

<template>
    <div id="wrapper">
        <div @click.prevent="playAudio()">
            <h1>V I K A P E D I A</h1>
        </div>
        <div>
            <p id="description">
                LOREM TEMPOR ALIQUA DO DUIS CUPIDATAT AD SUNT. MAGNA MAGNA EX MAGNA EXCEPTEUR
                OFFICIA UT IN FUGIAT QUIS. QUI LOREM ADIPISICING INCIDIDUNT MAGNA ULLAMCO ET DUIS
                CUPIDATAT IPSUM SINT CONSEQUAT NISI EA DO. LABORUM ENIM ALIQUA NISI DUIS EU FUGIAT
                NON SIT EA INCIDIDUNT MAGNA. EX EXERCITATION FUGIAT COMMODO LABORUM OCCAECAT UT
                NULLA MOLLIT NISI PARIATUR FUGIAT ET EST. NON NOSTRUD VOLUPTATE DOLORE DOLORE ET.
                EIUSMOD CONSECTETUR ALIQUIP ET ANIM PROIDENT ULLAMCO DUIS IN QUI CILLUM DESERUNT ID
                LABORE. ENIM NOSTRUD LABORE REPREHENDERIT IPSUM UT ALIQUA. MINIM DO ALIQUA EA ET EX
                AUTE AMET EIUSMOD IRURE ESSE. SINT LOREM EX REPREHENDERIT ELIT. QUI OCCAECAT LABORIS
                ALIQUA IPSUM CONSECTETUR EXCEPTEUR TEMPOR EU NON REPREHENDERIT. UT COMMODO AMET
                EXCEPTEUR NISI ESSE VELIT. COMMODO COMMODO VELIT MINIM PARIATUR EXCEPTEUR AD MOLLIT
                SIT DOLOR EIUSMOD TEMPOR DOLORE ENIM. LOREM VELIT QUIS TEMPOR LABORUM LABORUM CILLUM
                ADIPISICING CILLUM LABORE COMMODO ADIPISICING. DESERUNT IRURE INCIDIDUNT ALIQUA
                CONSECTETUR. ET INCIDIDUNT CILLUM VENIAM PARIATUR. SIT ALIQUIP PARIATUR MAGNA EST
                OCCAECAT PROIDENT DESERUNT QUIS AD. AMET OFFICIA VELIT SIT EIUSMOD CILLUM VELIT
                DOLOR NULLA. CILLUM EU COMMODO DO ESSE ULLAMCO EX DESERUNT DOLORE. NOSTRUD SIT AD
                SUNT ID EA AD REPREHENDERIT. OFFICIA DO SINT DESERUNT CULPA DO FUGIAT ELIT. ANIM
                EIUSMOD IN QUIS ELIT EXERCITATION MAGNA VELIT MINIM. FUGIAT ANIM ALIQUIP OCCAECAT
                ESSE DOLOR EST. SINT NON AD COMMODO SUNT MOLLIT LABORE CULPA CONSEQUAT DO PARIATUR.
                SUNT ALIQUIP ANIM SIT MINIM
                <span @click="resetMadness()">{{ madnessLevel }} / 100</span> CONSEQUAT IPSUM TEMPOR
                ESSE MINIM MOLLIT. ET ANIM SUNT VENIAM CULPA LABORE ADIPISICING INCIDIDUNT ID ALIQUA
                ULLAMCO ALIQUIP LOREM DOLOR SINT. SIT SUNT DESERUNT ALIQUA PARIATUR ESSE.
            </p>
        </div>
    </div>
</template>

<style>
#wrapper {
    user-select: none;
    color: #f0f7fd;
    width: 100%;
    min-width: 100%;
}
h1 {
    cursor: pointer;
    text-align: center;
    max-width: 50%;
    background-color: #cb4154;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0;
    opacity: 0.75;
    padding-left: 10px;
    padding-right: 10px;
    &:hover {
        color: 71767A;
        text-shadow: 3px 3px;
    }
}
p {
    max-width: 50%;
    background-color: #cb4154;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    opacity: 0.75;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
}
</style>
