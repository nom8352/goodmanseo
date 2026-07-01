document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  // FAQ Accordion
  const accordionTriggers = document.querySelectorAll(".accordion-trigger");
  accordionTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const item = trigger.closest(".accordion-item");
      const content = item.querySelector(".accordion-content");
      const isExpanded = trigger.getAttribute("aria-expanded") === "true";

      // Close all other items
      document.querySelectorAll(".accordion-item").forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains("active")) {
          otherItem.classList.remove("active");
          otherItem.querySelector(".accordion-trigger").setAttribute("aria-expanded", "false");
          otherItem.querySelector(".accordion-content").style.maxHeight = "0";
        }
      });

      // Toggle current item
      if (isExpanded) {
        item.classList.remove("active");
        trigger.setAttribute("aria-expanded", "false");
        content.style.maxHeight = "0";
      } else {
        item.classList.add("active");
        trigger.setAttribute("aria-expanded", "true");
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });

  // Mortgage Calculator Logic
  const borrowSlider = document.getElementById("borrow-slider");
  const borrowPowerDisplay = document.getElementById("borrow-power-display");
  const loanAmountInput = document.getElementById("loan-amount-input");
  const repaymentDisplay = document.getElementById("repayment-display");
  const clearInputBtn = document.getElementById("clear-input-btn");
  const rangeTrackFilled = document.querySelector(".range-track-filled");

  // Interest rate: 7.15% p.a. (0.0715 / 12 monthly), Term: 30 years (360 months)
  const annualRate = 0.0715;
  const monthlyRate = annualRate / 12;
  const totalMonths = 360;

  function formatCurrency(value) {
    return "$" + Number(value).toLocaleString("en-US", { maximumFractionDigits: 0 });
  }

  function parseCurrency(str) {
    return Number(str.replace(/[^0-9.-]+/g, ""));
  }

  function calculateMonthlyRepayment(loanAmount) {
    if (loanAmount <= 0) return 0;
    // PMT formula: P * (r * (1+r)^n) / ((1+r)^n - 1)
    const rateFactor = Math.pow(1 + monthlyRate, totalMonths);
    const repayment = loanAmount * (monthlyRate * rateFactor) / (rateFactor - 1);
    return Math.round(repayment);
  }

  function updateCalculatorFromSlider() {
    const borrowVal = parseInt(borrowSlider.value);
    borrowPowerDisplay.textContent = formatCurrency(borrowVal);

    // Default Loan Amount is ~83% of Borrowing Power
    const defaultLoan = Math.round(borrowVal * 0.8307);
    loanAmountInput.value = formatCurrency(defaultLoan);

    // Update Slider track color
    updateSliderTrack();

    // Update Repayments
    const monthlyRep = calculateMonthlyRepayment(defaultLoan);
    repaymentDisplay.textContent = formatCurrency(monthlyRep);
  }

  function updateCalculatorFromInput() {
    let loanAmount = parseCurrency(loanAmountInput.value);
    if (isNaN(loanAmount) || loanAmount < 0) {
      loanAmount = 0;
    }

    // Ensure display is formatted
    loanAmountInput.value = formatCurrency(loanAmount);

    // Update Repayments
    const monthlyRep = calculateMonthlyRepayment(loanAmount);
    repaymentDisplay.textContent = formatCurrency(monthlyRep);
  }

  function updateSliderTrack() {
    if (borrowSlider && rangeTrackFilled) {
      const min = parseFloat(borrowSlider.min);
      const max = parseFloat(borrowSlider.max);
      const val = parseFloat(borrowSlider.value);
      const percent = ((val - min) / (max - min)) * 100;
      rangeTrackFilled.style.width = percent + "%";
    }
  }

  if (borrowSlider && borrowPowerDisplay && loanAmountInput && repaymentDisplay) {
    borrowSlider.addEventListener("input", updateCalculatorFromSlider);

    loanAmountInput.addEventListener("change", updateCalculatorFromInput);

    // Clear input handler
    if (clearInputBtn) {
      clearInputBtn.addEventListener("click", () => {
        loanAmountInput.value = "$0";
        repaymentDisplay.textContent = "$0";
        loanAmountInput.focus();
      });
    }

    // Initialize display on load
    updateSliderTrack();
    const initialLoan = parseCurrency(loanAmountInput.value);
    const initialRep = calculateMonthlyRepayment(initialLoan);
    repaymentDisplay.textContent = formatCurrency(initialRep);
  }
});