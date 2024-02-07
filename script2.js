class movie{
    constructor(title,studio,rating="PG"){
        this.title=title,
        this.studio=studio,
        this.rating=rating
    }
    getPG(mp4){
        return mp4.filter(ele=>ele.rating=="PG")
    }
}
var flim = new movie("Casino Royale","Eon Productions","PG13");
console.log(flim)

var movies =[
    new movie("Casino Royale","Eon Productions","PG13"),
    new movie("Leo","Eon Productions","PG"),
    new movie("Jailer","Eon Productions","PG13"),
    new movie("Dada","Eon Productions","R"),
    new movie("Good nigth","Eon Productions","PG")   
];

var res = flim.getPG(movies)

console.log(res)


