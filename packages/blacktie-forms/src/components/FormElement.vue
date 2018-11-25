<template>
    <form action="">
        <slot :errorNotify="errorNotify"/>      
    </form>
</template>

<script>
/**
 * BlackTie form container with baked pop-up error notifications powered by popper.js
 */
import validate from './../mixins/validate.js'
export default {
  name: 'InputContainer',
  mixins: [validate]
}
</script>

<style>

</style>
