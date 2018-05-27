let total = 3200,
	time = 1,
	hourRate,
	tabLeft = document.querySelector(".tab-left"),
	tabRight = document.querySelector(".tab-right"),
	blocksBlock = document.getElementById("blocks-block"),
	pagesBlock = document.getElementById("pages-block"),
	counterBlock = document.getElementById("counter-block"),
	counterPages = document.getElementById("counter-pages"),
	counterHours = document.getElementById("counter-hours"),
	counterRate = document.getElementById("counter-rate"),
	changesCheck = document.getElementById("changes-check"),
	cmsCheck = document.getElementById("changes-cms"),
	totalValue = document.getElementById("total-value"),
	input = document.getElementsByTagName("input");


const 	land = 3200,
		corp = 6000,
		cms = 1500,
		changes = 1000,
		blocks = 350,
		pages = 750;

window.addEventListener("DOMContentLoaded", function(){
	tabLeft.addEventListener("click", () => {

			for (let i = 0; i < input.length; i++) {
				input[i].value = "";
			};
			blocksBlock.style.display = "flex";
			pagesBlock.style.display = "none";

			tabLeft.classList.add("active");
			tabRight.classList.remove("active");

			if (changesCheck.checked) {
				changesCheck.checked = false;
			};
			if (cmsCheck.checked) {
				cmsCheck.checked = false;
			};

			total = land;
			totalValue.value = total;
	});

		tabRight.addEventListener("click", () => {

			for (let i = 0; i < input.length; i++) {
				input[i].value = "";
			};
			blocksBlock.style.display = "none";
			pagesBlock.style.display = "flex";

			tabRight.classList.add("active");
			tabLeft.classList.remove("active");

			if (changesCheck.checked) {
				changesCheck.checked = false;
			};
			if (cmsCheck.checked) {
				cmsCheck.checked = false;
			};

			total = corp;
			totalValue.value = total;

	});
			counterBlock.addEventListener("change", () => {
				counterHours.value = "";
				counterRate.value = "";

				totalValue.value = counterBlock.value * blocks;
			});

			counterPages.addEventListener("change", () => {
				counterHours.value = "";
				counterRate.value = "";

				totalValue.value = counterPages.value * pages;
			});

			counterHours.addEventListener("change", () => {
				counterPages.value = "";
				counterBlock.value = "";

				total = 0;
				time = counterHours.value;
				totalValue.value = time * counterRate.value;
			});

			counterRate.addEventListener("change", () => {
				counterPages.value = "";
				counterBlock.value = "";

				totalValue.value = time * counterRate.value;



			});


});

// Добавление логики 
 

