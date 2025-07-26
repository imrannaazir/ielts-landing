import { Card, CardContent } from '@/components/ui/card'
import { PointerValue, Section } from '@/types'
import { Check } from 'lucide-react'
import Image from 'next/image'
import React, { FC } from 'react'
interface WhatWillLearnProps {section:Section}
const WhatWillLearn :FC<WhatWillLearnProps>= ({section}) => {
  console.log(section)
  return (
    <section className='space-y-4 mt-6'>
      <h2 className='text-2xl font-semibold '>{section.name}</h2>
      <Card>
        <CardContent className="grid md:grid-cols-2 gap-2 md:gap-4">
          {section.values.map((item: PointerValue) => (
            <div key={item.id} className='flex gap-2 '>
              <Check className="text-[#6294F8] min-w-5 min-h-5 " />
              <span>{item.text}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}

export default WhatWillLearn
