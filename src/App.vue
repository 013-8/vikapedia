<script lang="ts">
export default {
    data() {
        return {
            madnessLevel: 0,
            maxMadnessLevel: 666,
            soundBites: [
                new Audio('/sound_bites/mad.mp3'),
                new Audio('/sound_bites/madness.mp3'),
                new Audio('/sound_bites/off.mp3'),
                new Audio('/sound_bites/slowmo_hjerneskade.mp3'),
                new Audio('/sound_bites/this_is_lillevannet.mp3'),
                new Audio('/sound_bites/this_is_madness.mp3')
            ],
            secretSoundBytes: [
                new Audio('/sound_bites/this_shit_aint_nothing_to_me_man.mp3'),
                new Audio('/sound_bites/im_really_him.mp3')
            ]
        }
    },
    methods: {
        playAudio() {
            if (!this.soundBites || !this.secretSoundBytes) return
            this.levelUpMadness()
            if (this.isDemon()) return this.playSecretDemonSoundByte()
            if (this.isSemiDemon()) return this.playSecretSemiDemonSoundByte()
            return this.playRandomSoundByte()
        },
        isDemon() {
            return this.madnessLevel >= this.maxMadnessLevel
        },
        isSemiDemon() {
            return this.madnessLevel > 0 && this.madnessLevel % 5 === 0
        },
        levelUpMadness() {
            this.madnessLevel++
            if (this.madnessLevel > this.maxMadnessLevel) this.resetMadness()
        },
        resetMadness(audibleReset: boolean = false) {
            this.madnessLevel = 0
            if (audibleReset) this.secretSoundBytes[0].play()
        },
        playSecretDemonSoundByte() {
            return this.secretSoundBytes[1].play()
        },
        playSecretSemiDemonSoundByte() {
            return this.secretSoundBytes[0].play()
        },
        playRandomSoundByte() {
            this.soundBites[Math.floor(Math.random() * this.soundBites.length)].play()
        }
    }
}
</script>

<template>
    <div class="wrapper" :class="{ 'demon-mode': isDemon() }">
        <div @click.prevent="playAudio()">
            <h1 v-if="isDemon()">💀 V I K A P E D I A 💀</h1>
            <h1 v-else>&nbsp; V I K A P E D I A &nbsp;</h1>
        </div>
        <div>
            <p v-if="isDemon()" class="description">
                NULLA UT ULLAMCO CULPA EST ET OFFICIA ULLAMCO LABORUM PROIDENT QUIS COMMODO
                CUPIDATAT NISI. ENIM SINT CONSECTETUR EXERCITATION EA. ALIQUA ANIM DO LOREM DUIS.
                EIUSMOD EXERCITATION LABORIS NOSTRUD LABORE DOLOR. EST ANIM PROIDENT LABORE DESERUNT
                QUIS PROIDENT. ALIQUIP IN EU DO AD DOLORE EX VOLUPTATE SIT. COMMODO AD EXERCITATION
                ULLAMCO ALIQUA DOLORE EST IRURE PROIDENT LOREM EX SINT LABORUM. UT TEMPOR IN
                REPREHENDERIT OCCAECAT IRURE COMMODO NISI COMMODO MINIM UT AMET. VELIT AD ULLAMCO
                IRURE ANIM ID OFFICIA FUGIAT. AD TEMPOR ALIQUA QUI LABORIS IPSUM MAGNA. EA ET EX
                AUTE TEMPOR CONSEQUAT MINIM NOSTRUD CULPA. LABORUM NON CONSECTETUR COMMODO DOLOR
                CONSEQUAT IPSUM LABORUM. EA EXCEPTEUR ESSE CONSEQUAT DESERUNT DESERUNT AMET EU DO.
                INCIDIDUNT COMMODO CONSEQUAT ULLAMCO NISI EXERCITATION LOREM ADIPISICING NULLA.
                DOLOR DUIS EIUSMOD OFFICIA LABORE LABORE EXCEPTEUR IPSUM. EA NULLA NISI IRURE DOLOR
                CILLUM MINIM INCIDIDUNT SUNT ANIM DESERUNT SUNT COMMODO. OCCAECAT IRURE CONSECTETUR
                SUNT EXCEPTEUR. SIT LABORUM EXERCITATION PARIATUR REPREHENDERIT CUPIDATAT TEMPOR
                PROIDENT COMMODO ELIT. OFFICIA QUIS ENIM DOLORE EXCEPTEUR QUIS LOREM ALIQUA EA ESSE
                AUTE. NON ALIQUIP TEMPOR IN EXERCITATION COMMODO LABORIS ET FUGIAT EX SUNT CUPIDATAT
                ELIT. OFFICIA CUPIDATAT QUI QUI ENIM ENIM ESSE PARIATUR LOREM QUIS LABORIS PROIDENT
                DOLORE IN. ENIM NULLA FUGIAT ALIQUA ALIQUIP MOLLIT DUIS OCCAECAT ESSE LABORE
                CUPIDATAT. MOLLIT SIT IPSUM ADIPISICING IN ELIT VENIAM. DO DO OCCAECAT NULLA
                PROIDENT EU SUNT VENIAM. CILLUM ESSE ANIM PARIATUR CULPA NULLA VENIAM DESERUNT. UT
                DO TEMPOR ESSE AUTE. ELIT UT AMET VOLUPTATE MINIM LABORUM MAGNA QUI QUI INCIDIDUNT
                LABORIS PROIDENT AD. ULLAMCO PROIDENT LABORIS ULLAMCO INCIDIDUNT LABORUM AMET
                CONSECTETUR IPSUM LABORUM. DOLORE EXERCITATION CONSECTETUR ID COMMODO OFFICIA IPSUM
                EA AUTE CONSECTETUR CUPIDATAT MINIM CONSECTETUR EXCEPTEUR ENIM. EIUSMOD VOLUPTATE
                OCCAECAT NOSTRUD LOREM MOLLIT. INCIDIDUNT ALIQUA QUI SUNT DOLORE QUIS MOLLIT ELIT
                IRURE LABORUM COMMODO AMET EXERCITATION. SINT INCIDIDUNT MINIM VELIT AD DUIS MAGNA
                CULPA DOLOR FUGIAT UT MAGNA ULLAMCO OFFICIA CONSECTETUR. OCCAECAT PARIATUR EA MOLLIT
                OFFICIA CULPA ADIPISICING. MINIM DOLORE FUGIAT EXCEPTEUR AUTE CULPA ULLAMCO EA UT
                ALIQUA CILLUM MAGNA DUIS DOLOR DESERUNT. ADIPISICING OFFICIA NON SIT REPREHENDERIT
                NULLA LABORUM ANIM ENIM FUGIAT CONSECTETUR NOSTRUD EIUSMOD. IN EIUSMOD CONSEQUAT
                SINT MOLLIT EXERCITATION UT REPREHENDERIT NOSTRUD MAGNA. AUTE NULLA OFFICIA VELIT
                QUIS ET ALIQUA EXCEPTEUR CILLUM OFFICIA EXCEPTEUR LABORE MOLLIT VENIAM. QUIS MAGNA
                LABORUM ELIT AD VENIAM VENIAM NOSTRUD EXCEPTEUR. IPSUM IN INCIDIDUNT EA LOREM LABORE
                ET. ELIT ULLAMCO ULLAMCO LABORUM SIT DOLORE CILLUM SUNT ET DESERUNT ALIQUIP. EU QUIS
                MAGNA VENIAM MAGNA PROIDENT DO FUGIAT NULLA SIT PARIATUR ESSE DOLORE NON CUPIDATAT.
                ENIM MOLLIT ELIT LABORE MOLLIT CONSEQUAT DOLOR. DOLORE PROIDENT ENIM ALIQUIP DUIS.
                ALIQUA EXERCITATION QUIS MINIM REPREHENDERIT AD VOLUPTATE AMET NOSTRUD. PROIDENT QUI
                TEMPOR ALIQUIP QUI IN EU CILLUM QUIS. IN CONSECTETUR DOLOR NOSTRUD ESSE LABORE
                INCIDIDUNT AMET. DITTA E KUN STARTEN. AD LABORE SINT OFFICIA QUI ESSE TEMPOR NISI
                OFFICIA UT DOLOR REPREHENDERIT AD ALIQUIP. NULLA ET NISI VOLUPTATE EIUSMOD IN NON
                SIT EST SUNT CULPA VENIAM CULPA 2302222315.
            </p>
            <p v-else class="description">
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
                <span @click="resetMadness(true)">{{ madnessLevel }} / {{ maxMadnessLevel }}</span>
                CONSEQUAT IPSUM TEMPOR ESSE MINIM MOLLIT. ET ANIM SUNT VENIAM CULPA LABORE
                ADIPISICING INCIDIDUNT ID ALIQUA ULLAMCO ALIQUIP LOREM DOLOR SINT. SIT SUNT DESERUNT
                ALIQUA PARIATUR ESSE.
            </p>
        </div>
    </div>
</template>

<style>
.demon-mode {
    color: RGB(190, 75, 219) !important;
    -webkit-text-stroke: black;
}
.wrapper {
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
