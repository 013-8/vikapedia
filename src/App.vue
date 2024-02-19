<script lang="ts">
export default {
    data() {
        return {
            audioCounter: 0,
            audioFile: new Audio('/madness.mp3')
        }
    },
    methods: {
        playAudio() {
            if (!this.audioFile) return
            this.audioCounter++
            this.audioFile.play()
        },
        isDemonic() {
            return this.audioCounter % 3 === 0
        }
    }
}
</script>

<template>
    <div id="wrapper">
        <div @click.prevent="playAudio()">
            <h1 v-if="isDemonic()">👹 V I K A P E D I A 👹</h1>
            <h1 v-else>V I K A P E D I A</h1>
        </div>
        <div>
            <p id="description">
                Lorem tempor aliqua do duis cupidatat ad sunt. Magna magna ex magna excepteur
                officia ut in fugiat quis. Qui Lorem adipisicing incididunt magna ullamco et duis
                cupidatat ipsum sint consequat nisi ea do. Laborum enim aliqua nisi duis eu fugiat
                non sit ea incididunt magna. Ex exercitation fugiat commodo laborum occaecat ut
                nulla mollit nisi pariatur fugiat et est. Non nostrud voluptate dolore dolore et.
                Eiusmod consectetur aliquip et anim proident ullamco duis in qui cillum deserunt id
                labore. Enim nostrud labore reprehenderit ipsum ut aliqua. Minim do aliqua ea et ex
                aute amet eiusmod irure esse. Sint Lorem ex reprehenderit elit. Qui occaecat laboris
                aliqua ipsum consectetur excepteur tempor eu non reprehenderit. Ut commodo amet
                excepteur nisi esse velit. Commodo commodo velit minim pariatur excepteur ad mollit
                sit dolor eiusmod tempor dolore enim. Lorem velit quis tempor laborum laborum cillum
                adipisicing cillum labore commodo adipisicing. Deserunt irure incididunt aliqua
                consectetur. Et incididunt cillum veniam pariatur. Sit aliquip pariatur magna est
                occaecat proident deserunt quis ad. Amet officia velit sit eiusmod cillum velit
                dolor nulla. Cillum eu commodo do esse ullamco ex deserunt dolore. Nostrud sit ad
                sunt id ea ad reprehenderit. Officia do sint deserunt culpa do fugiat elit. Anim
                eiusmod in quis elit exercitation magna velit minim. Fugiat anim aliquip occaecat
                esse dolor est. Sint non ad commodo sunt mollit labore culpa consequat do pariatur.
                Sunt aliquip anim sit minim ullamco consequat ipsum tempor esse minim mollit. Et
                anim sunt veniam culpa labore adipisicing incididunt id aliqua ullamco aliquip Lorem
                dolor sint. Sit sunt deserunt aliqua pariatur esse.
            </p>
        </div>
    </div>
</template>

<style>
#wrapper {
    font-family: 'Courier New', Courier, monospace;
    user-select: none;
    color: white;
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
    &:hover {
        color: purple;
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
}
</style>
