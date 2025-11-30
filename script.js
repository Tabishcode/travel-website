function searchRecommendation() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let resultDiv = document.getElementById("results");

  let beaches = `
        <h2>Beach Destinations</h2>
        <p>Relax on sandy shores with crystal clear water.</p>
        <img src="images/beach1.jpg">
        <img src="images/beach2.jpg">
    `;

  let temples = `
        <h2>Temple Destinations</h2>
        <p>Explore sacred landmarks of history and spirituality.</p>
        <img src="images/temple1.jpeg">
        <img src="images/temple2.jpg">
    `;

  let japan = `
        <h2>Japan Travel</h2>
        <p>Modern cities, temples, cherry blossoms — a perfect mix.</p>
        <img src="images/japan1.jpeg">
        <img src="images/japan2.jpeg">
    `;

  if (input.includes("beach")) resultDiv.innerHTML = beaches;
  else if (input.includes("temple")) resultDiv.innerHTML = temples;
  else if (input.includes("japan")) resultDiv.innerHTML = japan;
  else
    resultDiv.innerHTML =
      "<p>No recommendations found. Try 'beach', 'temple', or 'Japan'.</p>";
}
