<template>
	<component class="c-hero"
			   :class="heroClass"
			   :style="backgroundImage ? `background-image: url('${backgroundImage}')` : ``"
			   :is="tag">
		<component v-if="overlay"
				   class="c-hero__overlay"
				   :class="overlayClass"
				   :is="overlayTag"></component>
		<component class="c-hero__body"
				   :class="bodyClass"
				   :is="bodyTag">
			<slot/>
		</component>
	</component>
</template>

<script>
export default {
	name: "CHero",
	props: {
		tag: {
			type: String,
			default: "section"
		},
		bodyTag: {
			type: String,
			default: "div"
		},
		overlayTag: {
			type: String,
			default: "div"
		},
		overlay: {
			type: Boolean,
			default: false
		},
		heroClass: {
			type: [String, Object],
			default: ""
		},
		overlayClass: {
			type: [String, Object],
			default: ""
		},
		bodyClass: {
			type: [String, Object],
			default: ""
		},
		backgroundImage: {
			type: String,
			default: ""
		}
	}
}
</script>