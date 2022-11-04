import React from "react"
import groupPhoto from "../images/group_photo.png"

export default function Header1(){
  return(
    <section className="header1">
      <img src={groupPhoto} className="header1--groupphoto" />
      <h1 className="header1--header-h1">Online Experiences</h1>
      <p className="header1--header-text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </section>
  )
}