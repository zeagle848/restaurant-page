export function loadHomePage() {
  // CREATE ROOT ELEMENTS
  const rootElement = document.getElementById("contents");
  const fragment = document.createDocumentFragment();

  const homePageContainer = document.createElement("div");
  homePageContainer.classList.add("home-page");

  // CREATE ABOUT US ELEMENTS

  const aboutUsDiv = document.createElement("div");
  aboutUsDiv.classList.add("home-page-content");
  aboutUsDiv.classList.add("about-us");

  const aboutUsHeader = document.createElement("h2");
  aboutUsHeader.classList.add("home-page-header");
  aboutUsHeader.textContent = "About Us";

  aboutUsDiv.append(aboutUsHeader);

  const aboutUsParagraph = document.createElement("p");
  aboutUsParagraph.classList.add("about-us-paragraph");
  aboutUsParagraph.textContent =
    "C'est La Vie is a small French-style artisan bakery and coffee shop, serving pastries and daily bread baked on the premises. Also available is a selection\
  of freshly squeezed juices and outstanding coffee prepared by the\
  expert barista.";

  aboutUsDiv.append(aboutUsParagraph);

  homePageContainer.append(aboutUsDiv);

  // CREATE OPEN TIMES ELEMENTS

  const timesDiv = document.createElement("div");
  timesDiv.classList.add("home-page-content");
  timesDiv.classList.add("times");

  const timesHeader = document.createElement("h2");
  timesHeader.classList.add("home-page-header");
  timesHeader.textContent = "Hours";

  timesDiv.append(timesHeader);

  const timesUnorderedList = document.createElement("ul");
  timesUnorderedList.classList.add("times-list");

  const timesListItemMonday = document.createElement("li");
  timesListItemMonday.textContent = "Monday: 7:30am–3pm";

  timesUnorderedList.append(timesListItemMonday);

  const timesListItemTuesday = document.createElement("li");
  timesListItemTuesday.textContent = "Tuessday: 7:30am–3pm";

  timesUnorderedList.append(timesListItemTuesday);

  const timesListItemWednesday = document.createElement("li");
  timesListItemWednesday.textContent = "Wednesday: 7:30am–3pm";

  timesUnorderedList.append(timesListItemWednesday);

  const timesListItemThursday = document.createElement("li");
  timesListItemThursday.textContent = "Thursday: 7:30am–3pm";

  timesUnorderedList.append(timesListItemThursday);

  const timesListItemFriday = document.createElement("li");
  timesListItemFriday.textContent = "Friday: 7:30am–3pm";

  timesUnorderedList.append(timesListItemFriday);

  const timesListItemSaturday = document.createElement("li");
  timesListItemSaturday.textContent = "Saturday: 7:30am–12pm";

  timesUnorderedList.append(timesListItemSaturday);

  const timesListItemSunday = document.createElement("li");
  timesListItemSunday.textContent = "Sunday: --Closed--";

  timesUnorderedList.append(timesListItemSunday);

  timesDiv.append(timesUnorderedList);

  homePageContainer.append(timesDiv);

  //CREATE LOCATION ELEMENTS

  const locationDiv = document.createElement("div");
  locationDiv.classList.add("home-page-content");
  locationDiv.classList.add("location");

  const locationHeader = document.createElement("h2");
  locationHeader.classList.add("home-page-header");
  locationHeader.textContent = "Location";

  locationDiv.append(locationHeader);

  const locationSpan = document.createElement("span");
  locationSpan.textContent = "4 Recreation Rd, Fish Hoek, Cape Town";

  locationDiv.append(locationSpan);

  homePageContainer.append(locationDiv);

  // ADD CREATED ELEMENTS TO ROOT ELEMENT

  fragment.append(homePageContainer);

  rootElement.append(fragment);
}
