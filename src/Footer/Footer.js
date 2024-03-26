
import React from 'react'
import './Footer.css'
import { Navigations } from './Navigations '
import { Descriptions } from './Descriptions '
import { ContactToday } from './ContactToday'
import { Services } from './Services'
import { MenuLinks } from './MenuLinks'
import { SocialLinks } from './SocialLinks'

export const Footer = () => {
  return (
    <footer>
       <Navigations/>
       <Descriptions/>
       <ContactToday/>
       <Services/>
       <MenuLinks/>
       <SocialLinks/>

    </footer>
  )
}
