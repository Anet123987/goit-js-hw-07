const categoryLi =document.querySelector("#categories");
const categoryItem=document.querySelectorAll("li.item");
console.log(`Кількість категорій: ${categoryItem.length}`);
categoryItem.forEach(item => {
    const categoryTitle = item.querySelector('h2').textContent;;
 const categoryElements = item.querySelectorAll('ul li');  
 console.log(`Категорія: ${categoryTitle}`);
  console.log(`Кількість елементів: ${categoryElements.length}`);
});