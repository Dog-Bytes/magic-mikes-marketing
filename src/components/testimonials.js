import React, { useState, useEffect } from 'react';
import { Content, ContentChild } from "../styling/globalStyleComponents";
import { H2, H1Testimonial, H3Testimonial, ContentChildTestimonial } from "../styling/introPageStyling";
import { reviews } from "../assets/data";
import Rating from '@mui/material/Rating';

export default function Testimonials(props) {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index == reviews.reviews.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
      document.getElementById("review-review").innerHTML = reviews.reviews[index]['review'];
      document.getElementById("review-reviewer").innerHTML = reviews.reviews[index]['reviewer'];
      document.getElementById("review-stars").setAttribute("style", reviews.reviews[index]['stars']);
    }, 10000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div>
      <Content flexDirection={"column"} style={{ backgroundColor: "#7eaa57", display: "flex", justifyContent: "center", padding: "20px" }}>
        <ContentChild style={{ margin: "auto", }}>
          <H2 style={{ color: "white", }}>What our customers are saying about us:</H2>
        </ContentChild>
        <ContentChildTestimonial id='testimonial'>
          <H1Testimonial id="review-review">{reviews.reviews[index]['review']}</H1Testimonial>
          <Rating style={{ display: "flex", justifyContent: "center"}} id="review-stars" size="large" value={reviews.reviews[index]['stars']} readOnly />
          <H3Testimonial id="review-reviewer">{reviews.reviews[index]['reviewer']}</H3Testimonial>
        </ContentChildTestimonial>
      </Content>
    </div>
  )
}