let accordian = document.querySelectorAll(".accordian-wrapper .accordian");
accordian.forEach((acco)=>{
    acco.onclick = () =>{
        accordian.forEach((subcontent)=>{
            subcontent.classList.remove("active");
        })
        acco.classList.add("active");
    };
});