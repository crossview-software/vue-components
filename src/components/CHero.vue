<template>
	<component :is="tag">
		<slot />
	</component>
</template>

<script>
export default {
	name: "CHero",
	props: {
		tag: {
			type: String,
			default: "section"
		}
	}
}
</script>