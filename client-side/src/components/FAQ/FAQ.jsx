"use client"

import { useState } from 'react'
import './FAQ.css'

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies 
gsap.registerPlugin(ScrollTrigger);

export default function FAQPage() {
  // State to track which FAQ is open
  const [openFAQs, setOpenFAQs] = useState({
    'is-webflow-seo-friendly': false, // First one open by default as shown in screenshot
  })

  // Toggle FAQ open/close
  const toggleFAQ = (id) => {
    setOpenFAQs(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  // FAQ data
  const basicFAQs = [
    {
      id: 'is-webflow-seo-friendly',
      question: 'Is Webflow SEO-friendly?',
      answer: 'Yes, Webflow is SEO-friendly. You can easily add meta titles, descriptions, alt text for images, and configure other SEO settings within the Designer. Webflow also generates clean, semantic HTML5 code that search engines love.'
    },
    {
      id: 'how-to-ensure-responsive',
      question: 'How to ensure that site is responsive?',
      answer: 'Webflow has built-in responsive design tools that allow you to create layouts that adapt to different screen sizes. You can use breakpoints to customize your design for desktop, tablet, and mobile devices. The Designer lets you preview and edit your site at different screen widths to ensure it looks great on all devices.'
    },
    {
      id: 'how-to-add-pages',
      question: 'How to add more pages to the template?',
      answer: 'To add more pages to your Webflow template, navigate to the Pages panel in the Designer, click the "+" button, and select "Add Page". You can then choose a blank page or duplicate an existing one. After creating the page, you can customize it using Webflow\'s design tools and connect it to your site navigation.'
    },
    {
      id: 'how-to-edit-content',
      question: 'How do I edit the content in a template?',
      answer: 'To edit content in a Webflow template, select the element you want to modify in the Designer, then use the panel on the right to change text, images, or styling. You can also use the Navigator panel on the left to find and select specific elements. For text editing, simply click on the text element and start typing.'
    },
    {
      id: 'can-i-customize-template',
      question: 'Can I customize the Webflow template?',
      answer: 'Yes, Webflow templates are fully customizable. You can modify colors, fonts, layouts, and functionality to match your brand and requirements. The Designer provides a visual interface where you can make changes without coding, though you can also add custom code if needed.'
    }
  ]

  const otherFAQs = [
    {
      id: 'how-to-backup',
      question: 'How do I backup my Webflow site?',
      answer: 'Webflow automatically saves your work as you design, but you can also manually create backups. Go to your Project Settings, select the "Backups" tab, and click "Create Backup". You can also export your site\'s code as a ZIP file for offline backup by going to Project Settings > Export.'
    },
    {
      id: 'how-to-transfer',
      question: 'How do I transfer my Webflow site?',
      answer: 'To transfer a Webflow site to another account, you can invite the new owner as a collaborator with Admin permissions, then they can clone the site to their account. Alternatively, you can transfer site ownership directly from Project Settings > General > Transfer Ownership if you have a paid plan.'
    },
    {
      id: 'can-i-integrate-tools',
      question: 'Can I integrate third-party tools?',
      answer: 'Yes, Webflow supports integration with many third-party tools and services. You can add custom code, embed widgets, connect with Zapier, or use Webflow\'s native integrations with services like Mailchimp, Google Analytics, Facebook Pixel, and more. Custom code can be added in the project settings or directly to specific pages.'
    },
    {
      id: 'how-to-update',
      question: 'How do I update my Webflow site?',
      answer: 'To update your Webflow site, make your changes in the Designer, then click the "Publish" button in the top right corner. You can choose to publish to your webflow.io subdomain or to your custom domain. Webflow also offers staging environments with Team plans so you can test changes before publishing them live.'
    },
    {
      id: 'what-are-components',
      question: 'What are the Webflow components?',
      answer: 'Webflow components include Elements (basic HTML elements like div, button, text), Symbols (reusable groups of elements), Interactions (animations and effects), CMS Collections (dynamic content structures), and Ecommerce features. These components can be combined to create complex, functional websites without coding.'
    }
  ]

  const container = useRef();
  useGSAP(() => {
    var tl = gsap.timeline(
      {
        scrollTrigger: {
          trigger: '.faq-container',
          markers: true,
          start: "top center",
          end: "0% center",
          scrub: 1,
        }
      }
    );

    var tl2 = gsap.timeline(
      {
        scrollTrigger: {
          trigger: '.faq-content',
          markers: true,
          start: "-15% center",
          end: "-15% center",
          scrub: 1,
        }
      }
    );

    tl.from('.faq-title', {
      opacity: 0,
      y: "-40%",
      duration: 1,
    }, "ab");

    tl.from('.faq-subtitle', {
      opacity: 0,
      y: "-40%",
      duration: 1,
    }, "ab");

    tl.from('.faq-section-title', {
      opacity: 0,
      y: "-20%",
      duration: 0.5,
    },"ab");
    tl2.from('.faq-list', {
      opacity: 0,
      y: "-20%",
      duration: 0.2,
    },"ab");
  }, { scope: container });

  return (
    <main ref={container}>
      <div className="faq-container">
        <div className="faq-header">
          <h1 className="faq-title">
            <span className="question-mark left">?</span>
            FAQs
            <span className="question-mark right">?</span>
          </h1>
          <p className="faq-subtitle">Get your questions answered.</p>
        </div>

        <div className="faq-content">
          <div className="faq-column">
            <h2 className="faq-section-title">Basic</h2>
            <div className="faq-list">
              {basicFAQs.map((faq) => (
                <div key={faq.id} className="faq-item">
                  <div
                    className="faq-question"
                    onClick={() => toggleFAQ(faq.id)}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-icon">
                      {openFAQs[faq.id] ? '✕' : '+'}
                    </span>
                  </div>
                  {openFAQs[faq.id] && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="faq-column">
            <h2 className="faq-section-title">Other</h2>
            <div className="faq-list">
              {otherFAQs.map((faq) => (
                <div key={faq.id} className="faq-item">
                  <div
                    className="faq-question"
                    onClick={() => toggleFAQ(faq.id)}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-icon">
                      {openFAQs[faq.id] ? '✕' : '+'}
                    </span>
                  </div>
                  {openFAQs[faq.id] && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
