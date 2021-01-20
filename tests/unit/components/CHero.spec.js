import {shallowMount} from "@vue/test-utils"
import CHero from "@/components/CHero.vue"
import TestComponent from "@/components/TestComponent"
import {h} from "vue"

describe("CHero.vue", () => {
	it("renders slot", () => {
		// This passes as expected
		const wrapper1 = shallowMount(CHero, {
			slots: {
				default: h("div", "Slot content")
			}
		})
		expect(wrapper1.html())
			.toContain("Slot content")

		// This passes as expected
		const wrapper2 = shallowMount(CHero, {
			slots: {
				default: TestComponent
			}
		})
		expect(wrapper2.html())
			.toContain("Testing, testing")

		// This fails unexpectedly, line 29 causes test to throw TypeError
		const wrapper3 = shallowMount(CHero, {
			slots: {
				default: "<p>Some test paragraph</p>"
			}
		})
		expect(wrapper3.html())
			.toContain("Some test paragraph")
	})
})
