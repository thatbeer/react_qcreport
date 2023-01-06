// https://headlessui.com/react/radio-group

import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

const plans = ['startup', 'business', 'enterprise']

export default function MyRadioGroup() {
  const [plan, setPlan] = useState(plans[0])

  return (
    <form action="/billing" method="post">
      <RadioGroup value={plan} onChange={setPlan} name="plan">
        <RadioGroup.Label>Plan</RadioGroup.Label>
        {plans.map((plan) => (
          <RadioGroup.Option key={plan} value={plan}>
            {plan}
          </RadioGroup.Option>
        ))}
      </RadioGroup>
      <button>Submit</button>
    </form>
  )
}