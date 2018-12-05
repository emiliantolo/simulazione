let string_square=function(s){

    let p=-1;
    
    if(typeof(s)==="string"){
	let l=s.length;
	p=l*l;
    }
    
    return {result: p};
}

module.exports=string_square;
