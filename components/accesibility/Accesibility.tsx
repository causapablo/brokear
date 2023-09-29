import Link from 'next/link'
import React from 'react'

function Accesibility() {
  return (
    <div>
      <h1 className='font-Fitgree text-[38px] font-semibold text-white'>Accessibility Statement</h1>
      <div className='text-[18px] space-y-5'>
        <p className='text-white'>Brokear is committed to providing a website that is accessible to all users,
          including those with disabilities. We strive to follow the Web Content Accessibility Guidelines
          (WCAG) 2.1 level AA standard, which provides recommendations for making web content more
          accessible to people with disabilities.</p>
        <p>Our website is designed to be compatible with assistive technologies such as screen
          readers, and we have implemented several features to improve accessibility, including:
        </p>
        <ul className='list-disc pl-7'>
          <li className="marker:text-red"><span className='font-bold'>Alternative text for images:</span>We provide alternative text for all images on our website, which can be read by screen readers and other assistive technologies. This ensures that users who cannot see images can still understand their content and context.</li>
          <li className="marker:text-red"><span className='font-bold'>Clear and consistent navigation:</span>We have designed our website’s navigation to be clear and consistent throughout the site, making it easier for users to find the content they need.</li>
          <li className="marker:text-red"><span className='font-bold'>Keyboard accessible forms:</span>We have made sure that all forms on our website can be navigated and filled out using only a keyboard, so that users who cannot use a mouse or touchpad can still interact with our site.</li>
          <li className="marker:text-red"><span className='font-bold'>High-contrast color scheme:</span>We have implemented a high-contrast color scheme on our website to make it easier for users with low vision to read the content.</li>
          <li className="marker:text-red"><span className='font-bold'>Descriptive links:</span>We use descriptive links throughout our website, making it easier for users to understand where a link will take them before clicking on it.</li>
        </ul>
        <p>We understand that accessibility is an ongoing process, and we are continually working to
          improve the user experience for all visitors to our site. This includes regular testing and
          evaluation of our website’s accessibility, as well as training our staff on best practices
          for accessibility.
        </p>
        <p>
          If you have any feedback or suggestions on how we can improve accessibility, please don’t
          hesitate to <Link href="/contact"><span className='underline underline-offset-1 text-red'>contact us</span></Link> . We are committed to ensuring that our website is accessible to all
          users, and we appreciate your input in helping us achieve this goal.
        </p>
      </div>
    </div>
  )
}

export default Accesibility
