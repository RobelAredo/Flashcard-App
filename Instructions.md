<div markdown="fileTab.file.contents || fileTab.file.markdown" language="fileTab.file.language" class="markdown collapsed"><h1>Project: Flashcard-o-matic</h1><p>A local school has decided to put together a flashcard application, <em>Flashcard-o-matic</em>, to help their students study online. Teachers will use this application to create decks of flashcards for the subjects they teach, and students will study the decks. The school needs you to build the application that the students and teachers will use.</p>

<p><zoomable-image zoom-disabled="expandable &amp;&amp; !expanded" class="enabled" style="height: 280.172px;"><!----><span class="zoomable-image-controls" ng-if="$ctrl.enabled" style=""> <button class="btn-default btn-sm icon-expand" ng-click="$ctrl.expandOrContract($event)" tooltip="Make this image as large as possible" type="button"></button> <button class="btn-default btn-sm icon-minus" ng-click="$ctrl.zoomOut($event)" ng-disabled="$ctrl.zoomOutDisabled" tooltip="Zoom Out" type="button" disabled="disabled"></button> <button class="btn-default btn-sm" ng-class="{ active: $ctrl.is100 }" ng-click="$ctrl.zoom100($event)" tooltip="Zoom 1:1 pixels" type="button"> 1:1 </button> <button class="btn-default btn-sm icon-plus" ng-click="$ctrl.zoomIn($event)" ng-disabled="$ctrl.zoomInDisabled" tooltip="Zoom In" type="button"></button> </span><!----> <div class="zoomable-image-scrollbox" ng-transclude="" ng-dblclick="$ctrl.autoZoom($event)" tooltip="You can zoom into this image using the controls, or double-clicking on it" tooltip-position="top" scroll-on-drag="$ctrl.enabled &amp;&amp; $ctrl.zoomed" tabindex="0"><img src="https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/8ad6e17b7d849280a619e4bb69c26baa-home.png" alt="Home page for Flashcard app" style="width: 258px; height: 278.017px; max-width: none;"></div></zoomable-image></p>
<p><a href="https://getbootstrap.com/" target="_blank" rel="noopener">Bootstrap 4</a> is included with the starter HTML. You're welcome to use vanilla CSS or Bootstrap 4 for styling your project. However, your finished product does <em>not</em> have to match the styles in the provided screenshots, as you will <em>not</em> be assessed on the styling or responsiveness of the your project.</p>
<p>This project is designed to test your ability to work with rendering and state management using React. Before taking on this module, you should be comfortable with the following:</p>
<ul>
<li>Installing packages via NPM.</li>
<li>Running tests from the command line.</li>
<li>Writing React function components.</li>
<li>Creating routes, including nested routes, using React Router</li>
<li>Using hooks like <code>useState()</code>, <code>useParams()</code>, and <code>useHistory()</code>.</li>
<li>Debugging React code through console output and using the VS Code debugger.</li>
</ul>
<h2>Project setup</h2><p>Follow the instructions below to get this project up and running on your own machine:</p>
<ul>
<li>Download the Qualified assignment files to your computer.</li>
<li>Run <code>npm install</code> to install the project.</li>
</ul>
<p><strong>NOTE: Work on this project locally, since Qualified's online IDE and Web Preview features don't work properly for this assignment.</strong> </p>
<p>To run the tests, you can run the following command:</p>
<div class="language-tabset"><div class="language-tab language-bash"><pre><code class="lang-bash">npm test
</code></pre>
</div></div><p>Most of the tests in this project wait for content to load via the API before continuing the test. Before the implementation is complete, the content never loads so the test fails with a timeout. As a result, the tests will initially run slowly. It may take perhaps a minute or more for all the tests run. The tests will speed up as the implementation nears completion.</p>
<p>You can run the application using the following command.</p>
<div class="language-tabset"><div class="language-tab language-bash"><pre><code class="lang-bash">npm start
</code></pre>
</div></div><p>The <code>start</code> command will start two servers concurrently:</p>
<ul>
<li>An API server, powered by <a href="https://www.npmjs.com/package/json-server" target="_blank" rel="noopener">json-server</a>, running on <code>http://localhost:5000</code></li>
<li>A React application running on <code>http://localhost:3000</code></li>
</ul>
<p>To stop the servers from running, you can press <code>Ctrl + C</code>.</p>
<h3>Running on Windows</h3><p>If you are having problems running <code>npm start</code> on Windows you may need to run the React client and server in separate terminals. Open a terminal and run <code>npm run start:react</code> to start the react application. Open another terminal and run <code>npm run start:server</code> to run the server.</p>
<h2>Instructions</h2><p>You are tasked with building a number of different screens for the users of the flashcard app, as summarized below:</p>
<table>
<thead>
<tr>
<th>Screen</th>
<th>Path</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Home</td>
<td><code>/</code></td>
<td>shows a list of decks with options to create, study, view, or delete a deck</td>
</tr>
<tr>
<td>Study</td>
<td><code>/decks/:deckId/study</code></td>
<td>allows the user to study the cards from a specified deck</td>
</tr>
<tr>
<td>Create Deck</td>
<td><code>/decks/new</code></td>
<td>allows the user to create a new deck</td>
</tr>
<tr>
<td>Deck</td>
<td><code>/decks/:deckId</code></td>
<td>shows all of the information about a specified deck with options to edit or add cards to the deck, navigate to the study screen, or delete the deck</td>
</tr>
<tr>
<td>Edit Deck</td>
<td><code>/decks/:deckId/edit</code></td>
<td>allows the user to modify information on an existing deck</td>
</tr>
<tr>
<td>Add Card</td>
<td><code>/decks/:deckId/cards/new</code></td>
<td>allows the user to add a new card to an existing deck</td>
</tr>
<tr>
<td>Edit Card</td>
<td><code>/decks/:deckId/cards/:cardId/edit</code></td>
<td>allows the user to modify information on an existing card</td>
</tr>
</tbody>
</table>
<p>All of the screens above will work on two common datasets. The datasets are related and at times you will need to work with both datasets to get the screens to work properly.</p>
<p>While working on these screens, you have both the tests and the screenshots below to act as a guide. You can create the screens in any order and are encouraged to organize your code using the "Grouping by route" technique you learned earlier.</p>
<p>While working on this project, you <em>should:</em></p>
<ul>
<li>Use well-named variables.</li>
<li>Build small single responsibility components and functions.</li>
<li>Display a "Not found" message if the user visits a URL that does not exist.</li>
<li>Edit only files inside of the <code>public/src/</code> directory.</li>
</ul>
<p>While working on this project, you <em>should not:</em></p>
<ul>
<li>Change the names of the API functions.</li>
<li>Edit any of the files outside of the <code>public/src/</code> directory.</li>
<li>Change the location of any of the existing files.</li>
</ul>
<p>If you feel as though one of your solutions is working but something isn't showing up right on the site or in the tests, reach out for help.</p>
<h2>API</h2><p>There are two datasets that are a part of this project: <code>decks</code> and <code>cards</code>.</p>
<p>You can view all the data inside of the <code>data/db.json</code> file. Each data set can be accessed via a named property in this file. The following is a partial listing of the data in <code>data/db.json</code>:</p>
<div class="language-tabset"><div class="language-tab language-json"><pre><code class="lang-json">{
  <span class="hljs-string">"decks"</span>: [
    {
      <span class="hljs-string">"id"</span>: <span class="hljs-number">1</span>,
      <span class="hljs-string">"name"</span>: <span class="hljs-string">"..."</span>,
      <span class="hljs-string">"description"</span>: <span class="hljs-string">"..."</span>
    }
  ],
  <span class="hljs-string">"cards"</span>: [
    {
      <span class="hljs-string">"id"</span>: <span class="hljs-number">1</span>,
      <span class="hljs-string">"front"</span>: <span class="hljs-string">"..."</span>,
      <span class="hljs-string">"back"</span>: <span class="hljs-string">"..."</span>,
      <span class="hljs-string">"deckId"</span>: <span class="hljs-number">1</span>
    }
  ]
}
</code></pre>
</div></div><h3>Decks</h3><p>Each Deck is an object with the following shape:</p>
<div class="language-tabset"><div class="language-tab language-json"><pre><code class="lang-json">{
  <span class="hljs-string">"id"</span>: <span class="hljs-number">1</span>,
  <span class="hljs-string">"name"</span>: <span class="hljs-string">"Rendering in React"</span>,
  <span class="hljs-string">"description"</span>: <span class="hljs-string">"React's component structure allows for quickly building a complex web application that relies on DOM manipulation. "</span>
}
</code></pre>
</div></div><p>A Deck represents a collection of flashcards, or simply <em>cards</em> .</p>
<h3>Cards</h3><p>Each card is an object with the following shape:</p>
<div class="language-tabset"><div class="language-tab language-json"><pre><code class="lang-json">{
  <span class="hljs-string">"id"</span>: <span class="hljs-number">1</span>,
  <span class="hljs-string">"front"</span>: <span class="hljs-string">"Differentiate between Real DOM and Virtual DOM."</span>,
  <span class="hljs-string">"back"</span>: <span class="hljs-string">"Virtual DOM updates are faster but do not directly update the HTML"</span>,
  <span class="hljs-string">"deckId"</span>: <span class="hljs-number">1</span>
}
</code></pre>
</div></div><p>Each card represents a flashcard with a <em>front</em> , where the question is displayed, and a <em>back</em>, where the answer can be found. A card also contains the <em>deckId</em>, which matches the card to the deck that the card belongs to.</p>
<h3>Utility functions</h3><p>There are several utility functions exported from <a href="./src/utils/api/index.js" target="_blank" rel="noopener"><code>src/utils/api/index.js</code> </a> that allow you to perform create, read, update, and delete operations with the API server. You will need to select and use the appropriate functions in your React components. </p>
<p>Note that the <code>updateDeck()</code>,  <code>readDeck()</code>,  and <code>listDecks()</code> functions call the API server using URLs that include a query string of <code>_embed=cards</code>. The results of the API calls for these functions will contain the both the deck and cards associated with the deck, so you won't have to make additional API calls to load the cards for each deck when you use these functions.</p>
<p>Please read the documentation in the file for more information.</p>
<h2>Screens</h2><p>You are tasked with creating the following screens that work with the above datasets.</p>
<h3>Home</h3><p>The Home screen is the first page the user sees. It is displayed at <code>/</code>.</p>

<p><zoomable-image zoom-disabled="expandable &amp;&amp; !expanded" class="enabled" style="height: 280.172px;"><!----><span class="zoomable-image-controls" ng-if="$ctrl.enabled" style=""> <button class="btn-default btn-sm icon-expand" ng-click="$ctrl.expandOrContract($event)" tooltip="Make this image as large as possible" type="button"></button> <button class="btn-default btn-sm icon-minus" ng-click="$ctrl.zoomOut($event)" ng-disabled="$ctrl.zoomOutDisabled" tooltip="Zoom Out" type="button" disabled="disabled"></button> <button class="btn-default btn-sm" ng-class="{ active: $ctrl.is100 }" ng-click="$ctrl.zoom100($event)" tooltip="Zoom 1:1 pixels" type="button"> 1:1 </button> <button class="btn-default btn-sm icon-plus" ng-click="$ctrl.zoomIn($event)" ng-disabled="$ctrl.zoomInDisabled" tooltip="Zoom In" type="button"></button> </span><!----> <div class="zoomable-image-scrollbox" ng-transclude="" ng-dblclick="$ctrl.autoZoom($event)" tooltip="You can zoom into this image using the controls, or double-clicking on it" tooltip-position="top" scroll-on-drag="$ctrl.enabled &amp;&amp; $ctrl.zoomed" tabindex="0"><img src="https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/8ad6e17b7d849280a619e4bb69c26baa-home.png" alt="Home screen" style="width: 258px; height: 278.017px; max-width: none;"></div></zoomable-image></p>
<p>The Home screen has the following features:</p>
<ul>
<li>The path to this screen should be <code>/</code>.</li>
<li>A "Create Deck" button is shown and clicking it brings the user to the Create Deck screen.</li>
<li>Existing decks are each shown with the deck name, the number of cards, and a “Study,” “View,” and “Delete” button. </li>
<li>Clicking the “Study” button brings the user to the Study screen.</li>
<li>Clicking the “View” button brings the user to the Deck screen.</li>
<li>Clicking the “Delete” button shows a warning message before deleting the deck.</li>
</ul>
<h4>Delete Deck prompt</h4><p>When the user clicks the "Delete" button, a warning message is shown and the user can click "OK" or "Cancel". If the user clicks "OK", the deck is deleted and the deleted deck is no longer visible on the Home screen.</p>
<p>You can use <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm" target="_blank" rel="noopener">window.confirm()</a> to create the modal dialog shown in the screenshot below.</p>

<p><zoomable-image zoom-disabled="expandable &amp;&amp; !expanded" class="enabled" style="height: 351.351px;"><!----><span class="zoomable-image-controls" ng-if="$ctrl.enabled" style=""> <button class="btn-default btn-sm icon-expand" ng-click="$ctrl.expandOrContract($event)" tooltip="Make this image as large as possible" type="button"></button> <button class="btn-default btn-sm icon-minus" ng-click="$ctrl.zoomOut($event)" ng-disabled="$ctrl.zoomOutDisabled" tooltip="Zoom Out" type="button" disabled="disabled"></button> <button class="btn-default btn-sm" ng-class="{ active: $ctrl.is100 }" ng-click="$ctrl.zoom100($event)" tooltip="Zoom 1:1 pixels" type="button"> 1:1 </button> <button class="btn-default btn-sm icon-plus" ng-click="$ctrl.zoomIn($event)" ng-disabled="$ctrl.zoomInDisabled" tooltip="Zoom In" type="button"></button> </span><!----> <div class="zoomable-image-scrollbox" ng-transclude="" ng-dblclick="$ctrl.autoZoom($event)" tooltip="You can zoom into this image using the controls, or double-clicking on it" tooltip-position="top" scroll-on-drag="$ctrl.enabled &amp;&amp; $ctrl.zoomed" tabindex="0"><img src="https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/ae0a66039ae79eee10554cc7af2fcc20-lete-deck-prompt.png" alt="Delete Deck prompt" style="width: 258px; height: 348.649px; max-width: none;"></div></zoomable-image></p>
<h3>Study</h3><p>The Study screen is displayed at <code>/decks/:deckId/study</code>.</p>

<p><zoomable-image zoom-disabled="expandable &amp;&amp; !expanded" class="enabled" style="height: 250.38px;"><!----><span class="zoomable-image-controls" ng-if="$ctrl.enabled" style=""> <button class="btn-default btn-sm icon-expand" ng-click="$ctrl.expandOrContract($event)" tooltip="Make this image as large as possible" type="button"></button> <button class="btn-default btn-sm icon-minus" ng-click="$ctrl.zoomOut($event)" ng-disabled="$ctrl.zoomOutDisabled" tooltip="Zoom Out" type="button" disabled="disabled"></button> <button class="btn-default btn-sm" ng-class="{ active: $ctrl.is100 }" ng-click="$ctrl.zoom100($event)" tooltip="Zoom 1:1 pixels" type="button"> 1:1 </button> <button class="btn-default btn-sm icon-plus" ng-click="$ctrl.zoomIn($event)" ng-disabled="$ctrl.zoomInDisabled" tooltip="Zoom In" type="button"></button> </span><!----> <div class="zoomable-image-scrollbox" ng-transclude="" ng-dblclick="$ctrl.autoZoom($event)" tooltip="You can zoom into this image using the controls, or double-clicking on it" tooltip-position="top" scroll-on-drag="$ctrl.enabled &amp;&amp; $ctrl.zoomed" tabindex="0"><img src="https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/e5adaf57aef5e38f4dcd8e7efd0a5dc9-study-first-card.png" alt="Study first card" style="width: 257.923px; height: 248.38px; max-width: none;"></div></zoomable-image></p>
<p>The Study screen has the following features:</p>
<ul>
<li>The path to this screen should include the <em>deckId</em> (i.e., <code>/decks/:deckId/study</code>).</li>
<li>You must use  the <code>readDeck()</code> function from <code>src/utils/api/index.js</code>  to load the deck that is being studied.</li>
<li>There is a breadcrumb navigation bar with links to home <code>/</code>, followed by the name of the deck being studied and finally the text <code>Study</code> (e.g., <code>Home/Rendering In React/Study</code>).</li>
<li>The deck title (i.e., "Study: Rendering in React" ) is shown on the screen.</li>
<li>Cards are shown one at a time, front-side first.</li>
<li>A button at the bottom of each card "flips" it to the other side.</li>
<li>After flipping the card, the screen shows a next button (see the "Next button" section below) to continue to the next card.</li>
<li>After the final card in the deck has been shown, a message (see the "Restart prompt" section below) is shown offering the user the opportunity to restart the deck.<ul>
<li>If the user does not restart the deck, they should return to the home screen.</li>
</ul>
</li>
<li>Studying a deck with two or fewer cards should display a "Not enough cards" message (see the "Not enough cards" section below) and a button to add cards to the deck.</li>
</ul>
<h4>Next button</h4><p>The next button appears after the card is flipped.</p>

<p><zoomable-image zoom-disabled="expandable &amp;&amp; !expanded" class="enabled" style="height: 278.075px;"><!----><span class="zoomable-image-controls" ng-if="$ctrl.enabled" style=""> <button class="btn-default btn-sm icon-expand" ng-click="$ctrl.expandOrContract($event)" tooltip="Make this image as large as possible" type="button"></button> <button class="btn-default btn-sm icon-minus" ng-click="$ctrl.zoomOut($event)" ng-disabled="$ctrl.zoomOutDisabled" tooltip="Zoom Out" type="button" disabled="disabled"></button> <button class="btn-default btn-sm" ng-class="{ active: $ctrl.is100 }" ng-click="$ctrl.zoom100($event)" tooltip="Zoom 1:1 pixels" type="button"> 1:1 </button> <button class="btn-default btn-sm icon-plus" ng-click="$ctrl.zoomIn($event)" ng-disabled="$ctrl.zoomInDisabled" tooltip="Zoom In" type="button"></button> </span><!----> <div class="zoomable-image-scrollbox" ng-transclude="" ng-dblclick="$ctrl.autoZoom($event)" tooltip="You can zoom into this image using the controls, or double-clicking on it" tooltip-position="top" scroll-on-drag="$ctrl.enabled &amp;&amp; $ctrl.zoomed" tabindex="0"><img src="https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/5a7d4b1050a592638fc1cf0df3f10cd0-rst-card-flipped.png" alt="Study after first card is flipped" style="width: 258px; height: 275.936px; max-width: none;"></div></zoomable-image></p>
<h4>Restart prompt</h4><p>When all cards are finished, a message is shown and the user is offered the opportunity to restart the deck. If the user does not restart the deck, they return to the home screen.</p>
<p>You can use <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm" target="_blank" rel="noopener">window.confirm()</a> to create the modal dialog shown in the screenshot below.</p>

<p><zoomable-image zoom-disabled="expandable &amp;&amp; !expanded" class="enabled" style="height: 278.075px;"><!----><span class="zoomable-image-controls" ng-if="$ctrl.enabled" style=""> <button class="btn-default btn-sm icon-expand" ng-click="$ctrl.expandOrContract($event)" tooltip="Make this image as large as possible" type="button"></button> <button class="btn-default btn-sm icon-minus" ng-click="$ctrl.zoomOut($event)" ng-disabled="$ctrl.zoomOutDisabled" tooltip="Zoom Out" type="button" disabled="disabled"></button> <button class="btn-default btn-sm" ng-class="{ active: $ctrl.is100 }" ng-click="$ctrl.zoom100($event)" tooltip="Zoom 1:1 pixels" type="button"> 1:1 </button> <button class="btn-default btn-sm icon-plus" ng-click="$ctrl.zoomIn($event)" ng-disabled="$ctrl.zoomInDisabled" tooltip="Zoom In" type="button"></button> </span><!----> <div class="zoomable-image-scrollbox" ng-transclude="" ng-dblclick="$ctrl.autoZoom($event)" tooltip="You can zoom into this image using the controls, or double-clicking on it" tooltip-position="top" scroll-on-drag="$ctrl.enabled &amp;&amp; $ctrl.zoomed" tabindex="0"><img src="https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/59f672a4dae995dd7bfeed04ab020b70-y-restart-prompt.png" alt="Study restart prompt" style="width: 258px; height: 275.936px; max-width: none;"></div></zoomable-image></p>
<h4>Not enough cards</h4><p>Studying a Deck with two or fewer cards should display a "Not enough cards" message and a button to add cards to the deck.</p>

<p><zoomable-image zoom-disabled="expandable &amp;&amp; !expanded" class="enabled" style="height: 241.8px;"><!----><span class="zoomable-image-controls" ng-if="$ctrl.enabled" style=""> <button class="btn-default btn-sm icon-expand" ng-click="$ctrl.expandOrContract($event)" tooltip="Make this image as large as possible" type="button"></button> <button class="btn-default btn-sm icon-minus" ng-click="$ctrl.zoomOut($event)" ng-disabled="$ctrl.zoomOutDisabled" tooltip="Zoom Out" type="button" disabled="disabled"></button> <button class="btn-default btn-sm" ng-class="{ active: $ctrl.is100 }" ng-click="$ctrl.zoom100($event)" tooltip="Zoom 1:1 pixels" type="button"> 1:1 </button> <button class="btn-default btn-sm icon-plus" ng-click="$ctrl.zoomIn($event)" ng-disabled="$ctrl.zoomInDisabled" tooltip="Zoom In" type="button"></button> </span><!----> <div class="zoomable-image-scrollbox" ng-transclude="" ng-dblclick="$ctrl.autoZoom($event)" tooltip="You can zoom into this image using the controls, or double-clicking on it" tooltip-position="top" scroll-on-drag="$ctrl.enabled &amp;&amp; $ctrl.zoomed" tabindex="0"><img src="https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/4fea9f95eed721bd25bb2bdfe8f70d3f-not-enough-cards.png" alt="Study with not enough cards" style="width: 257.849px; height: 239.8px; max-width: none;"></div></zoomable-image></p>
<p>Clicking the "Add Cards" button should take the user to the Add Card screen.</p>
<h3>Create Deck</h3><p>The Home screen has a "Create Deck" button that brings the user to the Create Deck screen.</p>

<p><zoomable-image zoom-disabled="expandable &amp;&amp; !expanded" class="enabled" style="height: 253.5px;"><!----><span class="zoomable-image-controls" ng-if="$ctrl.enabled" style=""> <button class="btn-default btn-sm icon-expand" ng-click="$ctrl.expandOrContract($event)" tooltip="Make this image as large as possible" type="button"></button> <button class="btn-default btn-sm icon-minus" ng-click="$ctrl.zoomOut($event)" ng-disabled="$ctrl.zoomOutDisabled" tooltip="Zoom Out" type="button" disabled="disabled"></button> <button class="btn-default btn-sm" ng-class="{ active: $ctrl.is100 }" ng-click="$ctrl.zoom100($event)" tooltip="Zoom 1:1 pixels" type="button"> 1:1 </button> <button class="btn-default btn-sm icon-plus" ng-click="$ctrl.zoomIn($event)" ng-disabled="$ctrl.zoomInDisabled" tooltip="Zoom In" type="button"></button> </span><!----> <div class="zoomable-image-scrollbox" ng-transclude="" ng-dblclick="$ctrl.autoZoom($event)" tooltip="You can zoom into this image using the controls, or double-clicking on it" tooltip-position="top" scroll-on-drag="$ctrl.enabled &amp;&amp; $ctrl.zoomed" tabindex="0"><img src="https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/c5806a5777aa468623767d8fa4fa8fe8-deck-create.png" alt="Create Deck" style="width: 257.949px; height: 251.5px; max-width: none;"></div></zoomable-image></p>
<p>The Create Deck screen has the following features:</p>
<ul>
<li>The path to this screen should be <code>/decks/new</code>.</li>
<li>There is a breadcrumb navigation bar with a link to home <code>/</code> followed by the text <code>Create Deck</code> (i.e., <code>Home/Create Deck</code>).</li>
<li>A form is shown with the appropriate fields for creating a new deck.<ul>
<li>The <code>name</code> field is an <code>&lt;input&gt;</code> field of type <code>text</code>.</li>
<li>The <code>description</code> field is a <code>&lt;textarea&gt;</code> field that can be multiple lines of text.</li>
</ul>
</li>
<li>If the user clicks "submit", the user is taken to the Deck screen.</li>
<li>If the user clicks "cancel", the user is taken to the Home screen.</li>
</ul>
<h2>Deck</h2><p>The Deck screen displays all of the information about a deck.</p>

<p><zoomable-image zoom-disabled="expandable &amp;&amp; !expanded" class="enabled" style="height: 322.581px;"><!----><span class="zoomable-image-controls" ng-if="$ctrl.enabled" style=""> <button class="btn-default btn-sm icon-expand" ng-click="$ctrl.expandOrContract($event)" tooltip="Make this image as large as possible" type="button"></button> <button class="btn-default btn-sm icon-minus" ng-click="$ctrl.zoomOut($event)" ng-disabled="$ctrl.zoomOutDisabled" tooltip="Zoom Out" type="button" disabled="disabled"></button> <button class="btn-default btn-sm" ng-class="{ active: $ctrl.is100 }" ng-click="$ctrl.zoom100($event)" tooltip="Zoom 1:1 pixels" type="button"> 1:1 </button> <button class="btn-default btn-sm icon-plus" ng-click="$ctrl.zoomIn($event)" ng-disabled="$ctrl.zoomInDisabled" tooltip="Zoom In" type="button"></button> </span><!----> <div class="zoomable-image-scrollbox" ng-transclude="" ng-dblclick="$ctrl.autoZoom($event)" tooltip="You can zoom into this image using the controls, or double-clicking on it" tooltip-position="top" scroll-on-drag="$ctrl.enabled &amp;&amp; $ctrl.zoomed" tabindex="0"><img src="https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/f63b8bedaaf37cd8c3245febe6f0275f-deck.png" alt="Deck" style="width: 258px; height: 320.099px; max-width: none;"></div></zoomable-image></p>
<p>The Deck screen has the following features:</p>
<ul>
<li>The path to this screen should include the <em>deckId</em> (i.e., <code>/decks/:deckId</code>).</li>
<li>You must use  the <code>readDeck()</code> function from <code>src/utils/api/index.js</code>  to load the existing deck.</li>
<li>There is a breadcrumb navigation bar with a link to home <code>/</code> followed by the name of the deck (e.g., <code>Home/React Router</code>).</li>
<li>The screen includes the deck name (e.g., "React Router") and deck description (e.g., "React Router is a collection of navigational components that compose declaratively in your application"). </li>
<li><p>The screen includes "Edit", "Study", "Add Cards", and "Delete" buttons. Each button takes the user to a different destination, as follows:</p>
<p>| Button Clicked | Destination                                                                                    |<br>
| -------------- | ---------------------------------------------------------------------------------------------- |<br>
| "Edit"         | Edit Deck Screen                                                                               |<br>
| "Study"        | Study screen                                                                                   |<br>
| "Add Cards"    | Add Card screen                                                                                |<br>
| "Delete"       | Shows a warning message before deleting the deck]( See the "Delete Card Prompt" section below) |</p>
</li>
<li><p>Each card in the deck:</p>
<ul>
<li>is listed on the page under the "Cards" heading.</li>
<li>shows a question and the answer to the question.</li>
<li>has an “Edit” button that takes the user to the Edit Card screen when clicked.</li>
<li>has a “Delete” button that allows that card to be deleted.</li>
</ul>
</li>
</ul>
<h3>Delete Card Prompt</h3><p>When the user clicks the "Delete" button associated with a card, a warning message is shown and the user can click "OK" or "Cancel". If the user clicks "OK", the card is deleted.</p>
<p>You can use <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm" target="_blank" rel="noopener">window.confirm()</a> to create the modal dialog shown in the screenshot below.</p>

<p><zoomable-image zoom-disabled="expandable &amp;&amp; !expanded" class="enabled" style="height: 351.351px;"><!----><span class="zoomable-image-controls" ng-if="$ctrl.enabled" style=""> <button class="btn-default btn-sm icon-expand" ng-click="$ctrl.expandOrContract($event)" tooltip="Make this image as large as possible" type="button"></button> <button class="btn-default btn-sm icon-minus" ng-click="$ctrl.zoomOut($event)" ng-disabled="$ctrl.zoomOutDisabled" tooltip="Zoom Out" type="button" disabled="disabled"></button> <button class="btn-default btn-sm" ng-class="{ active: $ctrl.is100 }" ng-click="$ctrl.zoom100($event)" tooltip="Zoom 1:1 pixels" type="button"> 1:1 </button> <button class="btn-default btn-sm icon-plus" ng-click="$ctrl.zoomIn($event)" ng-disabled="$ctrl.zoomInDisabled" tooltip="Zoom In" type="button"></button> </span><!----> <div class="zoomable-image-scrollbox" ng-transclude="" ng-dblclick="$ctrl.autoZoom($event)" tooltip="You can zoom into this image using the controls, or double-clicking on it" tooltip-position="top" scroll-on-drag="$ctrl.enabled &amp;&amp; $ctrl.zoomed" tabindex="0"><img src="https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/987a95a7cc4470316b38425b8cdb7c84-lete-card-prompt.png" alt="Delete card prompt" style="width: 258px; height: 348.649px; max-width: none;"></div></zoomable-image></p>
<h3>Edit Deck</h3><p>The Edit Deck screen allows the user to modify information on an existing deck.</p>

<p><zoomable-image zoom-disabled="expandable &amp;&amp; !expanded" class="enabled" style="height: 253.5px;"><!----><span class="zoomable-image-controls" ng-if="$ctrl.enabled" style=""> <button class="btn-default btn-sm icon-expand" ng-click="$ctrl.expandOrContract($event)" tooltip="Make this image as large as possible" type="button"></button> <button class="btn-default btn-sm icon-minus" ng-click="$ctrl.zoomOut($event)" ng-disabled="$ctrl.zoomOutDisabled" tooltip="Zoom Out" type="button" disabled="disabled"></button> <button class="btn-default btn-sm" ng-class="{ active: $ctrl.is100 }" ng-click="$ctrl.zoom100($event)" tooltip="Zoom 1:1 pixels" type="button"> 1:1 </button> <button class="btn-default btn-sm icon-plus" ng-click="$ctrl.zoomIn($event)" ng-disabled="$ctrl.zoomInDisabled" tooltip="Zoom In" type="button"></button> </span><!----> <div class="zoomable-image-scrollbox" ng-transclude="" ng-dblclick="$ctrl.autoZoom($event)" tooltip="You can zoom into this image using the controls, or double-clicking on it" tooltip-position="top" scroll-on-drag="$ctrl.enabled &amp;&amp; $ctrl.zoomed" tabindex="0"><img src="https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/6c34e4b94ba7e983719eda4aa6f60592-deck-edit.png" alt="Edit Deck" style="width: 257.949px; height: 251.5px; max-width: none;"></div></zoomable-image></p>
<p>The Edit Deck screen has the following features:</p>
<ul>
<li>The path to this screen should include the <em>deckId</em>(i.e., <code>/decks/:deckId/edit</code>).</li>
<li>You must use  the <code>readDeck()</code> function from <code>src/utils/api/index.js</code>  to load the existing deck.</li>
<li>There is a breadcrumb navigation bar with a link to home <code>/</code>, followed by the name of the deck being edited, and finally the text <code>Edit Deck</code> (e.g., <code>Home/Rendering in React/Edit Deck</code>).</li>
<li>It displays the same form as the Create Deck screen, except it is pre-filled with information for the existing deck.</li>
<li>The user can edit and update the form.</li>
<li>If the user clicks "Cancel", the user is taken to the Deck screen.</li>
</ul>
<h3>Add Card</h3><p>The Add Card screen allows the user to add a new card to an existing deck.</p>

<p><zoomable-image zoom-disabled="expandable &amp;&amp; !expanded" class="enabled" style="height: 248.56px;"><!----><span class="zoomable-image-controls" ng-if="$ctrl.enabled" style=""> <button class="btn-default btn-sm icon-expand" ng-click="$ctrl.expandOrContract($event)" tooltip="Make this image as large as possible" type="button"></button> <button class="btn-default btn-sm icon-minus" ng-click="$ctrl.zoomOut($event)" ng-disabled="$ctrl.zoomOutDisabled" tooltip="Zoom Out" type="button" disabled="disabled"></button> <button class="btn-default btn-sm" ng-class="{ active: $ctrl.is100 }" ng-click="$ctrl.zoom100($event)" tooltip="Zoom 1:1 pixels" type="button"> 1:1 </button> <button class="btn-default btn-sm icon-plus" ng-click="$ctrl.zoomIn($event)" ng-disabled="$ctrl.zoomInDisabled" tooltip="Zoom In" type="button"></button> </span><!----> <div class="zoomable-image-scrollbox" ng-transclude="" ng-dblclick="$ctrl.autoZoom($event)" tooltip="You can zoom into this image using the controls, or double-clicking on it" tooltip-position="top" scroll-on-drag="$ctrl.enabled &amp;&amp; $ctrl.zoomed" tabindex="0"><img src="https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/fcc7dde129ed17b6ee199313e1dbc542-card-add.png" alt="Add Card" style="width: 257.908px; height: 246.56px; max-width: none;"></div></zoomable-image></p>
<p>The Add Card screen has the following features:</p>
<ul>
<li>The path to this screen should include the <em>deckId</em> (i.e., <code>/decks/:deckId/cards/new</code>).</li>
<li>You must use  the <code>readDeck()</code> function from <code>src/utils/api/index.js</code>  to load the deck that you're adding the card to.</li>
<li>There is a breadcrumb navigation bar with a link to home <code>/</code>, followed by the name of the deck to which the cards are being added, and finally the text <code>Add Card</code> (e.g., <code>Home/React Router/Add Card</code>).</li>
<li>The screen displays the "React Router: Add Card" deck title.</li>
<li>A form is shown with the "front" and "back" fields for a new card. Both fields use a <code>&lt;textarea&gt;</code> tag that can accommodate multiple lines of text.</li>
<li>If the user clicks "Save", a new card is created and associated with the relevant deck. Then the form is cleared and the process for adding a card is restarted.</li>
<li>If the user clicks "Done", the user is taken to the Deck screen.</li>
</ul>
<h3>Edit Card</h3><p>The Edit Card screen allows the user to modify information on an existing card.</p>

<p><zoomable-image zoom-disabled="expandable &amp;&amp; !expanded" class="enabled" style="height: 322.581px;"><!----><span class="zoomable-image-controls" ng-if="$ctrl.enabled" style=""> <button class="btn-default btn-sm icon-expand" ng-click="$ctrl.expandOrContract($event)" tooltip="Make this image as large as possible" type="button"></button> <button class="btn-default btn-sm icon-minus" ng-click="$ctrl.zoomOut($event)" ng-disabled="$ctrl.zoomOutDisabled" tooltip="Zoom Out" type="button" disabled="disabled"></button> <button class="btn-default btn-sm" ng-class="{ active: $ctrl.is100 }" ng-click="$ctrl.zoom100($event)" tooltip="Zoom 1:1 pixels" type="button"> 1:1 </button> <button class="btn-default btn-sm icon-plus" ng-click="$ctrl.zoomIn($event)" ng-disabled="$ctrl.zoomInDisabled" tooltip="Zoom In" type="button"></button> </span><!----> <div class="zoomable-image-scrollbox" ng-transclude="" ng-dblclick="$ctrl.autoZoom($event)" tooltip="You can zoom into this image using the controls, or double-clicking on it" tooltip-position="top" scroll-on-drag="$ctrl.enabled &amp;&amp; $ctrl.zoomed" tabindex="0"><img src="https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/cd6a1f07574bf8544b0a30d45020a274-card-edit.png" alt="Edit Card" style="width: 258px; height: 320.099px; max-width: none;"></div></zoomable-image></p>
<p>The Edit Card screen has the following features:</p>
<ul>
<li>The path to this screen should include the <em>deckId</em> and the <em>cardId</em> (i.e., <code>/decks/:deckId/cards/:cardId/edit</code>).</li>
<li>You must use  the <code>readDeck()</code> function from <code>src/utils/api/index.js</code>  to load the deck that contains the card to be edited. Additionally, you must use  the <code>readCard()</code> function from <code>src/utils/api/index.js</code>  to load the card that you want to edit.</li>
<li>There is a breadcrumb navigation bar with a link to home <code>/</code>, followed by the name of the deck of which the edited card is a member, and finally the text <code>Edit Card :cardId</code> (e.g., <code>Home/Deck React Router/Edit Card 4</code>).</li>
<li>It displays the same form as the Add Card screen, except it is pre-filled with information for the existing card. It can be edited and updated.</li>
<li>If the user clicks on either "Save" or "Cancel", the user is taken to the <a href="#deck" target="_blank" rel="noopener">Deck screen</a>.</li>
</ul>
<p><strong>Note:</strong> In addition to needing to pass the tests and requirements in the instructions here, please review the Rubric Requirements for the human-graded part of this project in your Thinkful curriculum page.</p>
</div>