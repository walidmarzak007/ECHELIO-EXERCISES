function timeToMinutes (time){
    let hours = Number(time.split(":")[0]);
    let minutes = Number(time.split(":")[1]);
    let totalMinutes = minutes + ( hours * 60);
    return totalMinutes
}