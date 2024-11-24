(() => {
    'use strict'
    feather.replace({ 'aria-hidden': 'true' })
  })()



  document.getElementById("data-input").addEventListener("change", function () {
    const value = this.value;
    const additionalFields = document.getElementById("additional-fields");
    additionalFields.innerHTML = ""; // Clear previous fields
  
    if (value === "consultation") {
      // Add fields for consultation
      additionalFields.innerHTML = `
        <div class="col-md-6">
          <div class="mb-3">
            <label for="consultation-fee" class="form-label">Consultation Fee</label>
            <input type="number" class="form-control" id="consultation-fee" placeholder="Enter Consultation Fee">
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="procedure-date" class="form-label">Date for Procedure</label>
            <input type="date" class="form-control" id="procedure-date">
          </div>
        </div>`;
    } else if (value === "procedure") {
      // Add fields for procedure
      additionalFields.innerHTML = `
        <div class="col-md-4">
          <div class="mb-3">
            <label class="form-label">Procedure Name</label>
            <select class="form-select" aria-label="Procedure Name">
              <option selected>Select Procedure</option>
              <option value="1">Procedure 1</option>
              <option value="2">Procedure 2</option>
            </select>
          </div>
        </div>
        <div class="col-md-4">
          <div class="mb-3">
            <label for="amount-paid" class="form-label">Amount Paid</label>
            <input type="number" class="form-control" id="amount-paid" placeholder="Enter Amount Paid">
          </div>
        </div>
        <div class="col-md-4">
          <div class="mb-3">
            <label for="follow-up-required" class="form-label">Follow-up Required</label>
            <select class="form-select" id="follow-up-required">
              <option value="no" selected>No</option>
              <option value="yes">Yes</option>
            </select>
          </div>
        </div>
        <div id="follow-up-date-container"></div>`;
  
      // Listen for follow-up required field
      document.getElementById("follow-up-required").addEventListener("change", function () {
        const followUpContainer = document.getElementById("follow-up-date-container");
        if (this.value === "yes") {
          followUpContainer.innerHTML = `
            <div class="col-md-6">
              <div class="mb-3">
                <label for="follow-up-date" class="form-label">Date of Follow-up</label>
                <input type="date" class="form-control" id="follow-up-date">
              </div>
            </div>`;
        } else {
          followUpContainer.innerHTML = ""; // Remove follow-up date field
        }
      });
    }
  });
  