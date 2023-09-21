<template>
<div class="wrapper">
    <div class="timeline-dot">
        <div class="content right">

        </div>
    </div>
    <div class="timeline-dot" style="top: 20%;">
        <div class="content left">

        </div>
    </div>
    <div class="timeline-dot" style="top: 40%;">
        <div class="content right">

        </div>
    </div>
    <div class="timeline-dot" style="top: 60%;">
        <div class="content left">

        </div>
    </div>
    <div class="timeline-dot" style="top: 80%;">
        <div class="content right">

        </div>
    </div>
</div>
</template>
<script>
export default{

}
</script>
<style lang="scss" scoped>
.wrapper{
    height: 160vh;
    background-color: var(--green2);
    width: 100%;
    padding-top: 2rem;
    display: flex;
    justify-content: center;
    position: relative;
    &::before {
    content: "";
    position: absolute;
    left: 50%; 
    box-shadow: 1px 1px 5px var(--backgroundLighter);
    top: 2rem;
    bottom: 2rem;
    width: 3px; 
    border-radius: 5px;
    background-color: var(--backgroundColor); 
    transform: translateX(-50%); 
  }
  .timeline-dot {
    position: absolute;
    left: 50%;
    width: 2rem; /* Diameter of the dots */
    box-shadow: 1px 1px 5px var(--backgroundLighter);
    height: 2rem; /* Diameter of the dots */
    border: 0.2rem solid var(--backgroundColor);
    border-radius: 50%; /* Make the dots circular */
    background-color: var(--green2);
    display: flex;
    transform: translateX(-50%); /* Center the dots horizontally */
    .content{
        width: 40rem;
        height: 20rem;
        box-shadow: 3px 3px 10px var(--backgroundLighter);
        border-radius: 7px;
        outline: 0.2rem var(--backgroundLighter) solid;
        position: absolute;
        top: -1rem;
    }
    .left{
        right: 12rem;
        &::before{
            content: "";
            height: 0.2rem;
            width: 10rem;
            background-color: var(--backgroundLighter);
            position: absolute;
            left: 100%;
            top: 1.9rem;
        }
    }
    .right{
        left: 12rem;
        &::before{
            content: "";
            height: 0.2rem;
            width: 10rem;
            background-color: var(--backgroundLighter);
            position: absolute;
            right: 100%;
            top: 1.9rem;
        }
    }
  }
}
</style>