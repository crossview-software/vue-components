import {shallowMount} from "@vue/test-utils"
import CHero from "@/components/CHero.vue"
import {h} from "vue"

describe("CHero wrapper", () => {
	it("renders the specified wrapper when passed", () => {
		const el      = "div"
		const wrapper = shallowMount(CHero, {
			props: {
				tag: el
			}
		})
		expect(wrapper.element.tagName.toLowerCase())
			.toMatch(el)
	})

	it("renders section if no wrapper specified", () => {
		const wrapper = shallowMount(CHero)
		expect(wrapper.element.tagName.toLowerCase())
			.toMatch("section")
	})

	it("renders classes on the hero container", () => {
		const wrapper = shallowMount(CHero, {
			props: {
				heroClass: "test-class"
			}
		})
		expect(wrapper.find(".test-class")
		              .exists())
			.toBeTruthy()
	})

	it("sets the background image if specified", () => {
		const wrapper = shallowMount(CHero, {
			props: {
				backgroundImage: "something.png"
			}
		})
		const styles  = wrapper.attributes().style
		expect(styles)
			.toBeTruthy()
		expect(styles)
			.toContain("background-image: url(something.png)")
	})
})

describe("CHero body", () => {
	it("renders the slot", () => {
		const text    = "Slot content"
		const wrapper = shallowMount(CHero, {
			slots: {
				default: h("div", text)
			}
		})
		expect(wrapper.html())
			.toContain(text)
	})

	it("renders the specified slot wrapper when passed", () => {
		const wrapper = shallowMount(CHero, {
			props: {
				tag: "div",
				bodyTag: "section"
			}
		})
		expect(wrapper.find("section.c-hero__body")
		              .exists())
			.toBeTruthy()
	})

	it("renders div if no body wrapper passed", () => {
		const wrapper = shallowMount(CHero)
		expect(wrapper.find("div.c-hero__body")
		              .exists())
			.toBeTruthy()
	})

	it("renders classes on the body wrapper", () => {
		const wrapper = shallowMount(CHero, {
			props: {
				bodyClass: "test-class"
			}
		})
		expect(wrapper.find(".test-class")
		              .exists())
			.toBeTruthy()
	})
})

describe("CHero overlay", () => {
	it("renders the overlay", () => {
		const wrapper = shallowMount(CHero, {
			props: {
				overlayTag: "article",
				overlay: true
			}
		})
		expect(wrapper.find("article.c-hero__overlay")
		              .exists())
			.toBeTruthy()
	})

	it("renders div if no overlay tag passed", () => {
		const wrapper = shallowMount(CHero, {
			props: {
				overlay: true
			}
		})
		expect(wrapper.find("div.c-hero__overlay")
		              .exists())
			.toBeTruthy()
	})

	it("doesn't render the overlay by default", () => {
		const wrapper = shallowMount(CHero, {
			props: {
				overlay: false
			}
		})
		expect(wrapper.find("div.c-hero__overlay")
		              .exists())
			.toBeFalsy()
	})

	it("renders classes on the hero overlay", () => {
		const wrapper = shallowMount(CHero, {
			props: {
				overlayClass: "test-class",
				overlay: true
			}
		})
		expect(wrapper.find(".test-class")
		              .exists())
			.toBeTruthy()
	})
})
