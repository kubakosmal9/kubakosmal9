<template>
  <div class="wrapper">
    <div class="background">
      <div class="main-title">Education</div>
      <div class="content">
        <span class="text" style="font-size: 2rem;font-weight: bold; margin-top: 2rem;">Specialization: Mechatronics</span>
        <span class="text" style="font-size: 1.8rem; font-weight: 100; border-bottom: 2px solid var(--light); width: 40%; text-align: center;">(Technik Mechatronik)</span>
        <span class="text" style="font-size: 1.2rem; font-weight: 100;">2017-2021</span>
        <span class="text" style="font-size: 1rem; font-weight: 100;">Location: Technikum nr 1 w Siedlcach</span>
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
    padding-bottom: 10rem;
    background-color: var(--backgroundLighter);
    width: 100%;
    padding-top: 2rem;
    display: flex;
    justify-content: center;
    position: relative;
    .background{
        width: 65%;
        margin-top: 2rem;
        background-color: var(--green);
        border-radius: 0.2rem;
        box-shadow: var(--backgroundDarker) 0.1rem 0.1rem 1rem;
        position: relative;
        padding-bottom: 4rem;
        overflow: hidden;
        .main-title{
          font-family: "QuickSand";
          color: var(--light);
          width: 100%;
          text-align: center;
          cursor: pointer;
          margin-top: 1rem;
          font-size: 3rem;
        }
        .content{
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 0.3rem;
          align-items: center;
          cursor: pointer;

          color: var(--light);
          font-family: "QuickSand";
        }
  }
}
</style>