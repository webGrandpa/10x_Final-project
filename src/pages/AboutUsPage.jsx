import React from 'react'
import SectionHeaders from '../components/SectionHeaders'

const AboutUsPage = () => {
  return (
    <div>
      <SectionHeaders
                header="ჩვენ შესახებ"
                paragraph="2010 წლიდან დღემდე, Finco ეძღვნება ბიზნესებისა და ინდივიდების მხარდაჭერას, რათა მიაღწიონ ფინანსურ წარმატებას. ჩვენ ვაერთიანებთ გამოცდილებას, თანამედროვე ხედვებს და პერსონალიზებულ მიდგომას, რომ მივაწოდოთ შედეგები, რომლებიც ნამდვილად მნიშვნელოვანია.."
                hasDivider={true}
                size='2'
                pSize='sm'
                padding='pb-1'
                gap='2'
                textCenter='start'
              />

    </div>
  )
}

export default AboutUsPage