<template>
    <div>
        <p>{{ work.slug }}</p>
    </div>
</template>
<script>
export default {
    name: 'WorkDetail',
    props: ["work"],
    
}
</script>