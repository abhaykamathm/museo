import {
  wait,
  simulateClick,
  simulateHover,
  simulateVerticalScroll,
  simulateHorizontalScroll,
} from "./helpers";

const home_container_id = "home-container";
const home_watch_button_id = "home-watch-button";
const live_hidden_bottom_panel = "";

export async function runDemo() {
  await wait(1000);
  simulateVerticalScroll(document.getElementById(home_container_id), 2000);

  await wait(1000);
  simulateVerticalScroll(document.getElementById(home_container_id), 0);

  await wait(1000);
  simulateHover(
    document.querySelectorAll(".auction_piece")[0],
    "auction_piece_hover_effect"
  );

  await wait(1500);
  simulateHover(
    document.querySelectorAll(".auction_piece")[1],
    "auction_piece_hover_effect"
  );

  await wait(1000);
  simulateHorizontalScroll(
    document.getElementsByClassName("live-paintings")[0],
    600
  );

  await wait(1000);
  simulateHover(
    document.querySelectorAll(".auction_piece")[2],
    "auction_piece_hover_effect"
  );

  await wait(500);
  simulateClick(document.querySelectorAll(".auction_piece")[2]);

  await wait(1000);
  simulateHorizontalScroll(
    document.getElementsByClassName("live-paintings")[0],
    -300
  );

  await wait(1000);
  simulateHover(
    document.querySelectorAll(".auction_piece")[1],
    "auction_piece_hover_effect"
  );
  
  await wait(1000);
  simulateClick(document.querySelectorAll(".auction_piece")[1]);
  // Hover on Watch Button
  //   simulateHover(
  //     document.getElementById(home_watch_button_id),
  //     "watch-btn-hover-effect"
  //   );
  //   await wait(1500);
  //   simulateClick(document.getElementById(home_watch_button_id));
}
