import React, { useState } from 'react'
import { pricingPlans } from '../data/pricing'
import { Check, Sparkles, Shield } from 'lucide-react'

export default function PricingSection({ onOpenBooking }) {
  const [isAnnual, setIsAnnual] = useState(true)

  return (
    <section className="section pricing-section" id="pricing">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Sparkles size={14} />
            <span>Sacred Investment</span>
          </div>
          <h2 className="section-title">Sanctuary Membership & Passes</h2>
          <p className="section-subtitle">
            Transparent, conscious tuition. Choose flexible monthly access or commit to an annual cycle of deep spiritual
            evolution with 20% off.
          </p>

          {/* Billing Switch */}
          <div className="billing-switch-wrapper">
            <span className={`switch-label ${!isAnnual ? 'active' : ''}`}>Monthly Billing</span>
            <button
              type="button"
              className={`billing-toggle-btn ${isAnnual ? 'annual' : 'monthly'}`}
              onClick={() => setIsAnnual(!isAnnual)}
              aria-label="Toggle Annual Billing"
            >
              <span className="toggle-thumb"></span>
            </button>
            <span className={`switch-label ${isAnnual ? 'active' : ''}`}>
              Annual Immersion <span className="discount-pill">Save 20%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="pricing-grid">
          {pricingPlans.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice
            return (
              <div
                key={plan.id}
                className={`pricing-card glass-card ${plan.popular ? 'popular-card' : ''}`}
              >
                {plan.badge && (
                  <div className={`plan-badge ${plan.popular ? 'popular-badge' : ''}`}>
                    {plan.badge}
                  </div>
                )}

                <div className="plan-header">
                  <h3 className="plan-name">{plan.name}</h3>
                  <p className="plan-subtitle">{plan.subtitle}</p>
                </div>

                <div className="plan-price-block">
                  <span className="currency-symbol">$</span>
                  <span className="price-amount">{price}</span>
                  <span className="price-cycle">/month</span>
                </div>
                <span className="billed-note">
                  {isAnnual ? `Billed annually ($${price * 12}/year)` : 'Billed monthly, cancel anytime'}
                </span>

                <p className="plan-desc">{plan.description}</p>

                <div className="plan-divider"></div>

                <ul className="plan-features-list">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="plan-feature-item">
                      <div className="feature-check-icon">
                        <Check size={15} />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className={plan.popular ? 'btn-warm plan-cta-btn' : 'btn-primary plan-cta-btn'}
                  onClick={() => onOpenBooking({ title: `${plan.name} Membership`, isPlan: true, plan })}
                >
                  {plan.buttonText}
                </button>
              </div>
            )
          })}
        </div>

        {/* Sanctuary Guarantee Box */}
        <div className="guarantee-box glass-card">
          <div className="guarantee-icon-wrap">
            <Shield size={28} className="guarantee-icon" />
          </div>
          <div className="guarantee-text">
            <h4 className="guarantee-title">14-Day Sacred Peace of Mind Guarantee</h4>
            <p className="guarantee-sub">
              If your sanctuary experience does not bring deeper clarity, spinal ease, and nervous system calm within 14 days,
              we will cheerfully refund 100% of your tuition—no questions asked.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
