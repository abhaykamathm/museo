import {
  wait,
  simulateClick,
  simulateHover,
  simulateVerticalScroll,
  simulateHorizontalScroll,
  addClass,
  removeClass,
} from "./helpers";

const home_container_id = "home-container";
const home_watch_button_id = "home-watch-button";
const live_hidden_bottom_panel = "";
const live_screen_fullscreen_icon_id = "live-screen-fullscreen-icon";
const off_canvas_container_id = "off-canvas-container";
const off_canvas_home_id = "off-canvas-home";
const view_carousel_id = "view-carousel";

const active_crousel_card_class = "swiper-slide-active";
const carousel_navigate_next_class = "swiper-button-next";
const carousel_navigate_prev_class = "swiper-button-prev";

export async function runDemo() {
  // Page : Home Page, Gallery View
  // Step : On the Home Page scroll down
  await wait(1000);
  simulateVerticalScroll(document.getElementById(home_container_id), 2000);

  // Step : On the Home Page scroll up
  await wait(1000);
  simulateVerticalScroll(document.getElementById(home_container_id), 250);

  // Step : On the Home Page hover on the 1st art piece in the 1st row
  await wait(1000);
  simulateHover(
    document.querySelectorAll(".auction_piece")[0],
    "auction_piece_hover_effect"
  );

  // Step : On the Home Page hover on the 2nd art piece in the 1st row
  await wait(1500);
  simulateHover(
    document.querySelectorAll(".auction_piece")[1],
    "auction_piece_hover_effect"
  );

  // Step : On the Home Page scroll right in the 1st row
  await wait(1000);
  simulateHorizontalScroll(
    document.getElementsByClassName("live-paintings")[0],
    600
  );

  // Step : On the Home Page hover on the 3rd art piece in the 1st row
  await wait(1000);
  simulateHover(
    document.querySelectorAll(".auction_piece")[2],
    "auction_piece_hover_effect"
  );

  // Step : On the Home Page click on the 3rd art piece in the 1st row
  await wait(500);
  simulateClick(document.querySelectorAll(".auction_piece")[2]);

  // Step : On the Home Page scroll left in the 1st row
  await wait(1000);
  simulateHorizontalScroll(
    document.getElementsByClassName("live-paintings")[0],
    -300
  );

  // Step : On the Home Page hover on the 2nd art piece in the 1st row
  await wait(1000);
  simulateHover(
    document.querySelectorAll(".auction_piece")[1],
    "auction_piece_hover_effect"
  );

  // Step : On the Home Page click on the 2nd art piece in the 1st row
  await wait(500);
  simulateClick(document.querySelectorAll(".auction_piece")[1]);

  // Step : On the Home Page hover on the watch button
  await wait(1000);
  simulateHover(
    document.getElementById(home_watch_button_id),
    "watch-btn-hover-effect"
  );

  // Step : On the Home Page click on the watch button
  await wait(1500);
  simulateClick(document.getElementById(home_watch_button_id));

  // Page : Live Page
  // Step : On the Live page show the hidden panel at the bottom (info and place bid)
  await wait(1000);
  document.querySelectorAll(
    ".parent .info-place-bid-container"
  )[0].style.display = "flex";

  // Step : On the Live page hover on the info button
  await wait(1000);
  simulateHover(
    document.querySelectorAll(".parent .info-place-bid-container .info")[0],
    "demo-button-hover-effect"
  );

  // Step : On the Live page click on the info button
  await wait(1000);
  simulateClick(
    document.querySelectorAll(".parent .info-place-bid-container .info")[0]
  );

  // Step : On the now visisble left side panel, scroll to the bottom
  await wait(1000);
  simulateVerticalScroll(
    document.querySelectorAll(
      ".side-info-panel-container .scroll-container"
    )[0],
    1000
  );

  // Step : On the now visisble left side panel, scroll to the top
  await wait(1000);
  simulateVerticalScroll(
    document.querySelectorAll(
      ".side-info-panel-container .scroll-container"
    )[0],
    0
  );

  // Step : On the now visisble left side panel, hover on view carousel button.
  await wait(1000);
  simulateHover(
    document.getElementById(view_carousel_id),
    "view-carousel-hover-effect-demo"
  );

  // Step : On the now visisble left side panel, click on view carousel button.
  await wait(1000);
  simulateClick(document.getElementById(view_carousel_id));

  // Page : Home Page, Carousel View
  // Step : Within the Carousel View click on the next item button
  await wait(1000);
  simulateClick(
    document.getElementsByClassName(carousel_navigate_next_class)[0]
  );

  // Step : Within the Carousel View click on the next item button
  await wait(1000);
  simulateClick(
    document.getElementsByClassName(carousel_navigate_next_class)[0]
  );

  // Step : Within the Carousel View click on the previous item button
  await wait(1000);
  simulateClick(
    document.getElementsByClassName(carousel_navigate_prev_class)[0]
  );

  // Step : Within the Carousel View click on the previous item button
  await wait(1000);
  simulateClick(
    document.getElementsByClassName(carousel_navigate_prev_class)[0]
  );

  // Step : Within the Carousel View click on the previous item button
  await wait(1000);
  simulateClick(
    document.getElementsByClassName(carousel_navigate_prev_class)[0]
  );

  // Step : Within the Carousel View click on the previous item button
  await wait(1000);
  simulateClick(
    document.getElementsByClassName(carousel_navigate_prev_class)[0]
  );

  // Step : Within the Carousel View click on the next item button
  await wait(1000);
  simulateClick(
    document.getElementsByClassName(carousel_navigate_next_class)[0]
  );

  // Step : Within the Carousel View click on the next item button
  await wait(1000);
  simulateClick(
    document.getElementsByClassName(carousel_navigate_next_class)[0]
  );

  //   // Hover on full screen and click
  //   await wait(1000);
  //   simulateHover(
  //     document.getElementById(live_screen_fullscreen_icon_id),
  //     "icon-container-hover-effect-demo"
  //   );

  //   await wait(1000);
  //   simulateClick(document.getElementById(live_screen_fullscreen_icon_id));

  //   // Open the side canvas and go to home page
  //   await wait(1000);
  //   addClass(document.getElementById(off_canvas_container_id), "visible");

  //   await wait(1000);
  //   simulateHover(
  //     document.getElementById(off_canvas_home_id),
  //     "icon-hover-effect-demo"
  //   );

  //   await wait(500);
  //   simulateClick(document.getElementById(off_canvas_home_id));

  //   await wait(1000);
  //   removeClass(document.getElementById(off_canvas_container_id), "visible");
}
