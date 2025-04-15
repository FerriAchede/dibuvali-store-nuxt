<template>
    <AnnouncementBar/>
    <Menu/>
    <carrouselBanner/>
    <AnnouncementBar :show-announcement="false" />
    
    <slot/>
    <FooterView/>
</template>
<script>
export default {

}
</script>
<style lang="">

</style>