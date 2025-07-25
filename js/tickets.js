// Add More Interests Functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('Tickets page loaded successfully!');
    
    const addMoreBtn = document.querySelector('.add-more-btn');
    let interestCount = 4; // Starting with 4 interests
    
    // Preview card elements
    const previewName = document.getElementById('preview-name');
    const previewTitle = document.getElementById('preview-title');
    const previewInterests = document.getElementById('preview-interests');
    
    // Form inputs
    const nameInput = document.getElementById('name');
    const titleInput = document.getElementById('title');
    
    // Function to update preview card
    function updatePreview() {
        // Get all form values to check if there's any content
        const nameValue = nameInput.value.trim();
        const titleValue = titleInput.value.trim();
        
        // Check if there are any interests
        const allInterestInputs = document.querySelectorAll('input[name^="interest"]');
        let hasInterests = false;
        
        allInterestInputs.forEach((input) => {
            if (input.value.trim()) {
                hasInterests = true;
            }
        });
        
        // Check if there's any content at all
        const hasAnyContent = nameValue || titleValue || hasInterests;
        
        // Show/hide placeholder
        const placeholder = document.getElementById('preview-placeholder');
        if (hasAnyContent) {
            placeholder.style.display = 'none';
        } else {
            placeholder.style.display = 'flex';
        }
        
        // Update name - only show when there's content
        if (nameValue) {
            previewName.textContent = nameValue.toUpperCase();
            previewName.style.display = 'block';
        } else {
            previewName.style.display = 'none';
        }
        
        // Update title - only show when there's content
        if (titleValue) {
            previewTitle.textContent = titleValue;
            previewTitle.style.display = 'block';
        } else {
            previewTitle.style.display = 'none';
        }
        
        // Update interests - only show when there's actual content
        previewInterests.innerHTML = '';
        
        allInterestInputs.forEach((input, index) => {
            const value = input.value.trim();
            
            // Only create interest item if there's actual content
            if (value) {
                const interestDiv = document.createElement('div');
                interestDiv.className = 'interest-item';
                interestDiv.textContent = value.toUpperCase();
                
                previewInterests.appendChild(interestDiv);
            }
        });
        
        // Show/hide dots lines based on whether there are interests
        const dotsLines = document.querySelectorAll('.dots-line');
        dotsLines.forEach(line => {
            if (hasInterests) {
                line.style.display = 'block';
            } else {
                line.style.display = 'none';
            }
        });
    }
    
    // Add event listeners to existing inputs
    if (nameInput) nameInput.addEventListener('input', updatePreview);
    if (titleInput) titleInput.addEventListener('input', updatePreview);
    
    // Add listeners to existing interest inputs
    document.querySelectorAll('input[name^="interest"]').forEach(input => {
        input.addEventListener('input', updatePreview);
        input.maxLength = 20; // Set 20 character limit
    });
    
    // Initialize preview
    updatePreview();
    
    // Add More Button Functionality
    if (addMoreBtn) {
        addMoreBtn.addEventListener('click', function() {
            // Check if we've reached the maximum limit (8 total inputs)
            if (interestCount >= 8) {
                return; // Don't add more if limit reached
            }
            
            interestCount++;
            
            // Create new Bootstrap column with input
            const newCol = document.createElement('div');
            newCol.className = 'col-12 mb-3';
            
            const newInputGroup = document.createElement('div');
            newInputGroup.className = 'input-group';
            
            const newLabel = document.createElement('label');
            newLabel.setAttribute('for', `interest${interestCount}`);
            newLabel.className = 'form-label';
            newLabel.textContent = 'OTHER INTEREST';
            
            const newInput = document.createElement('input');
            newInput.type = 'text';
            newInput.id = `interest${interestCount}`;
            newInput.name = `interest${interestCount}`;
            newInput.className = 'form-control custom-input';
            newInput.placeholder = 'Other interest';
            newInput.maxLength = 20; // Set 20 character limit
            
            // Add event listener to new input for preview update
            newInput.addEventListener('input', updatePreview);
            
            newInputGroup.appendChild(newLabel);
            newInputGroup.appendChild(newInput);
            newCol.appendChild(newInputGroup);
            
            // Find the button's parent column and insert before it
            const buttonCol = addMoreBtn.closest('.col-12');
            buttonCol.parentNode.insertBefore(newCol, buttonCol);
            
            // Add entrance animation
            newCol.style.opacity = '0';
            newCol.style.transform = 'translateY(-10px)';
            newCol.style.transition = 'all 0.3s ease';
            
            setTimeout(() => {
                newCol.style.opacity = '1';
                newCol.style.transform = 'translateY(0)';
                // Update preview after animation
                updatePreview();
            }, 50);
            
            // Check if we've reached the maximum limit and disable button
            if (interestCount >= 8) {
                addMoreBtn.disabled = true;
                addMoreBtn.style.opacity = '0.5';
                addMoreBtn.style.cursor = 'not-allowed';
                addMoreBtn.textContent = 'Maximum reached';
            }
        });
    }
});
