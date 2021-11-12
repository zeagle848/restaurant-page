export function loadContactPage() {
  // CREATE ROOT ELEMENTS
  const rootElement = document.getElementById("contents");
  const fragment = document.createDocumentFragment();

  const contactPageContainer = document.createElement("div");
  contactPageContainer.classList.add("contact-page");
  contactPageContainer.classList.add("hide-page");

  // CREATE CONTACT ELEMENTS

  const contactPageContent = document.createElement("div");
  contactPageContent.classList.add("contact-page-content");

  const phoneNumberHeader = document.createElement("h2");
  phoneNumberHeader.classList.add("contact-header");
  phoneNumberHeader.textContent = "Phone Number";

  contactPageContent.append(phoneNumberHeader);

  const phoneNumber = document.createElement("span");
  phoneNumber.textContent = "083 676 7832";

  contactPageContent.append(phoneNumber);

  const emailHeader = document.createElement("h2");
  emailHeader.classList.add("contact-header");
  emailHeader.textContent = "E-mail";

  contactPageContent.append(emailHeader);

  const email = document.createElement("span");
  email.textContent = "cestlavie@gmail.com";

  contactPageContent.append(email);

  // ADD CREATED ELEMENTS TO ROOT ELEMENT
  contactPageContainer.append(contactPageContent);
  fragment.append(contactPageContainer);
  rootElement.append(fragment);
}
