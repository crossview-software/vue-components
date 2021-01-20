import {shallowMount} from "@vue/test-utils"
import CHero from "@/components/CHero.vue"
import TestComponent from "@/components/TestComponent"
import {h} from "vue"

describe("CHero.vue", () => {
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

	it("renders slot", () => {
		const wrapper = shallowMount(CHero, {
			slots: {
				default: h("div", "Slot content")
			}
		})
		expect(wrapper.html())
			.toContain("Slot content")
	})
})
