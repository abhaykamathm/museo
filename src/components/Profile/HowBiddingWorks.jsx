import React from "react";
import "./HowBiddingWorks.css";
import Video_button from "../../../public/Images/Profile/Video_button.svg";

export const HowBiddingWorks = () => {
  return (
    <div id="Bidding-works-container">
      <div className="header-text text-color-1 highlighter-type-1">How Bidding works</div>
      <div className="button-container">
        <div className="main-buttons">Overview</div>
        <div className="main-buttons">Buy</div>
        <div className="main-buttons">How to buy</div>
      </div>
      <div className="Buy-buttons-container">
        <div className="buy-buttons">Register to Bid</div>
        <div>|</div>
        <div className="buy-buttons">Ways to place your bid</div>
        <div>|</div>
        <div className="buy-buttons">Pay for purchase</div>
        <div>|</div>
        <div className="buy-buttons">Receive your property</div>
      </div>
      <div className="How-to-buy-buttons-container">
        <div className="how-to-buy-buttons">How to bid online</div>
        <div>|</div>
        <div className="how-to-buy-buttons">Online Only Auction</div>
        <div>|</div>
        <div className="how-to-buy-buttons">Live Auction</div>
      </div>
      <div className="image-div">
        <div className="image-box">
          <img src={Video_button} alt="" />
        </div>
        <div className="image-text medium-highlighter-type-1">0:20</div>
      </div>
      {/* <div className="overview-text-container">
        <div className="text-color-1 medium-highlighter-type-1 medium-text-opac-2">
          When you wish to acquire fine art and coins, our knowledgeable
          specialists can help ensure
        </div>
        <div className="overview-text-div2">
          <div className="text-color-1 medium-text-opac">
            ownership of a desired object that will enhance your present
            collection. Or, if you’re a novice collector, Sotheby’s can provide
            basic guidance.
          </div>
          <div className="text-color-1 medium-text-opac">
            Interested in buying? Please review our 
            <span className="highter-text">upcoming auctions</span>
          </div>
        </div>
      </div> */}
      {/* <div className="Register-to-bid-text-container medium-highlighter-type-1">
        <div className="RTB-top-header highlighter-type-1 ">In-Person Registration</div>
        <div className="RTB-container1 medium-text-opac">
           <div>To register in person to bid at the sale location before the auction begins, you will need to </div>
            <div>1.Create an account </div>
            <div>2.Provide a government-issued proof of identity such as a driver’s license or passport.</div>
            <div>3.A bank reference may also be required.</div>
            <div>4.You will also have the opportunity to record your communication details (email or post) and</div>
            <div>5. Shipping preferences (collect or ship).</div>
        </div>
        <div className="highlighter-type-1 lite-text-opac">Online Registration</div>
        <div className="RTB-container2">
          <div className="lite-text-opac">
            <div>You also may register by visiting an <span className="highter-text">upcoming auctions page</span></div>
             <div>1.Simply choose any auction and click on the Register to Bid button for that event.</div>
             <div>2.The detailed pages for each auction also provide the option to register.</div>
             <div>3. To be eligible to bid, please be sure to complete your application 24 hours prior to the auction.</div>
          </div>
        </div>
        <div className="RTB-footer lite-text-opac">If you require further assistance while registering to bid, please contact the Bids department. You may find the related details in the <span className="highter-text">help section</span></div>
      </div> */}
      {/* <div className="Ways-to-placebid-text-container medium-highlighter-type-1">
        <div className="highlighter-type-1">There are four ways to bid</div>
        <div className="medium-text-opac highlighter-text-2">When you click Register to Bid you will be prompted to select your preferred bidding method : </div>
        <div className="WTD-container1 medium-text-opac">
            <div className="WTD-container2">
              <div>- <span className="highlighter-type-1">Saleroom</span> : Bid in person to experience the live excitement of an auction first hand.</div>
              <div>- <span className="highlighter-type-1">Online</span> : Participate in real time via our online bidding platform.</div>
              <div>- <span className="highlighter-type-1">Telephone</span> : Register to Telephone Bid with our representative who will call you during the auction.</div>
              <div>- <span className="highlighter-type-1">Live</span> : Register to Live Bid and participate in the auction from the comfort of your home through the TV</div>
              <div>- <span className="highlighter-type-1">Absentee</span>: Submit an Absentee Bid and allow the auctioneer to execute this on your behalf.</div>
            </div>
        </div>
        <div className="lite-text-opac">If your bid is successful, our Post Sale Service teams in each selling centre will be happy to assist with payment, as well as the collection or shipment of your purchase.</div>
      </div> */}
      {/* <div className="Pay-for-purchase-text-container medium-highlighter-type-1">
        <div>
          <div className="PFP-header medium-text-opac-2">
            - Successful bidders may pay on the day of the auction, immediately
            after buying.
          </div>
          <div className="PFP-container1 medium-text-opac">
            <div className="medium-highlighter-type-1">
              - Otherwise, the Post- Sale Service team will send you an invoice
              and any shipping quote according to your pre-sale preference.{" "}
            </div>
            <div className="medium-highlighter-type-1">
              - The final amount due will include the hammer price, the buyer’s
              premium, the overhead premium and any local taxes.
            </div>
          </div>
        </div>
        <div className="PFP-container2 lite-text-opac">
          <div className="PFP-container3">
            <div>Buyers may pay by </div>
            <div>- Bank transfer</div>
            <div> - Cheque or</div>
            <div>- Cash (subject to any restrictions and legal limits).</div>
            <div>
              - Certain credit cards are accepted at particular sale locations,
              but please contact these sale locations directly for detailed
              information.
            </div>
          </div>
          <div className="PFP-footer">
            Payment must be sent from the invoiced party, rather than from a
            third party. See our Conditions of Business for full details.
          </div>
        </div>
      </div> */}
      {/* <div className="Receive-your-purchase-text-container medium-highlighter-type-1 medium-text-opac-2">
        <div>
          <div>
            - Fully knowledgeable on all international regulations, the Our
            Post-Sale Service team can arrange expert
          </div>
          <div className="medium-text-opac">
            and insured shipping and convenient delivery of your property. We
            offer exceptional service and competitive rates whether consigning a
            single artwork, a diamond bracelet or a large piece of furniture.
          </div>
        </div>
        <div className="RYP-container1 lite-text-opac">
          <div>
            - For sales in London and New York, simply provide your delivery
            address when you register for a sale.
          </div>
          <div className="RYP-footer">
            Following a purchase, you will be sent a comprehensive shipping
            quote. For property purchased in any of our other salerooms, please
            contact that office directly to arrange for the transport of your
            purchases.
          </div>
        </div>
      </div> */}
      {/* <div className="How-to-bid-online-text-container">
        <div className="HTBO-container1 medium-highlighter-type-1">
          <div className="medium-text-opac-2">
           <span className="bold-text">Browse an auction</span> : We encourage you to contact our specialists,
            whose contact information is included on
          </div>
          <div className="medium-text-opac">
            the auction catalogue page. All property in the auction is available
            for viewing in our exhibitions or by appointment.
          </div>
        </div>
        <div className="HTBO-container2 medium-text-opac medium-highlighter-type-1">
          <span className="highlighter-type-1">Place a bid </span>through our app from the start of the auction until the
          lot closes. See how to bid in our
          <span className="highter-text">online only and live auctions</span> . Please contact the Bids
          Department in the designated auction location should you need any
          assistance.
        </div>
        <div className="HTBO-container3 lite-text-opac medium-highlighter-type-1">
          <div className="HTBO-footer1">
            <span className="highlighter-type-1">Watch your bids</span> ! If you are outbid in an online only auction, you
            will be notified on the live page, by email, and by push
            notifications (if enabled on your smartphone).In a live auction, you
            will be notified on the a live page and by push notification, but
            not by email.
          </div>
          <div className="HTBO-footer2">
            <span className="highlighter-type-1">After your lot has closed</span>, you will be notified on the auction and
            lot detail pages as well as via email. If you are the winning
            bidder, you will receive an invoice shortly after the auction
            including your total charges along with payment and property
            collection instructions.
          </div>
        </div>
      </div> */}
      {/* <div className="Online-only-auction-text-container">
        <div className="medium-highlighter-type-1 medium-text-opac-3">- Select the lots you wish to bid on and place your maximum bid.</div>
        <div className="OOA-container1 medium-text-opac">
          <div>- You will be asked to either log in or create a new account.</div>
          <div>- You will then be asked to choose your account number and review and accept the Terms & Conditions before placing your first bid.</div>
          <div>- The platform will place incremental bids on your behalf up to the maximum amount specified.</div>
          <div>- Use the ‘Quick Bid’ feature to increase your bid to the next increment.</div>
        </div>
        <div className="OOA-container2 lite-text-opac">
          <div>- The closing time noted at the top of the auction page indicates when the first lot will begin to close.</div>
          <div>- As the auction closes, a countdown timer will be displayed for each lot one minute before it closes.</div>
          <div> - Each lot closes in one minute increments and will be extended by two minutes if a bid is placed within the final minute before the lot’s scheduled closing time.</div>
          <div>- Lots may extend for up to two hours to accommodate competitive bidding.</div>
        </div>
      </div> */}
      <div className="Live-auction-text-container text-color-2">
        <div className="LA-header medium-text-opac-3">
          There are <span className="highlighter-type-1">four different ways</span> to bid in a live auction : by telephone,
          online, in the room, and by either absentee or advance bidding ahead
          of the auction.
        </div>
        <div className="LA-container1 medium-text-opac">
          <div>
            You can register for telephone, online, or in-room bidding via the
            Register to Bid link on the auction overview page.
          </div>
          <div>
            ‘Advance bids’ or ‘absentee bids’, both of which enable you to set
            your maximum bid on a lot, can be placed online or via the Bids
            Department ahead of the auction.Please note that auctions will
            either have advance bidding or absentee bidding, never both.
          </div>
          <div>
            At the stated date and time, a live auction will begin when the
            auctioneer opens each lot for bidding.Clients are able to
            participate by bidding in the saleroom, by telephone, or online via
            our app.
          </div>
        </div>
        <div className="LA-container2 lite-text-opac">
          <div>
            Bids will be accepted in the order they are received and the highest
            bid placed will win each lot. When competitive bidding subsides, the
            auctioneer can send a ‘fair warning’ message to indicate that the
            lot will close imminently. Please note that placing the leading
            maximum bid before the live auction begins does not guarantee that
            another client will not outbid you before the auctioneer closes the
            lot.
          </div>
          <div>
            <span className="highlighter-type-1">Absentee bid</span> : A maximum bid placed ahead of the auction which will
            be executed on your behalf by the auctioneer during the live
            auction, at the lowest price possible and never for more than the
            maximum bid amount you indicate. Successful absentee bidders will be
            notified after the auction.
          </div>
          <div>
            <span className="highlighter-type-1">Advance bid</span> : A maximum bid placed ahead of the auction which will
            be executed on your behalf in response to any other bids placed on
            the lot. If your maximum bid is below the reserve, responsive bids
            may be placed by Sotheby’s on behalf of the seller up to the amount
            of the reserve ahead of the live auction.
          </div>
          <div>
            <span className="highlighter-type-1">Advance bid</span> : A maximum bid placed ahead of the auction which will
            be executed on your behalf in response to any other bids placed on
            the lot. If your maximum bid is below the reserve, responsive bids
            may be placed by Sotheby’s on behalf of the seller up to the amount
            of the reserve ahead of the live auction.
          </div>
        </div>
      </div>
    </div>
  );
};
