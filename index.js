exports.gen=function(e,r){
    var t=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","&","é","~",'"',"#","'","{","(","[","-","|","è","`","_","\\","ç","^","à","@",")","]","°","+","=","}","¨","$","£","¤","ù","%","µ","*","§","!","/",":",".",";","?",","],
        n=[];
    if("number"==typeof e&&"number"==typeof r){
        if(e<=3&&e>0){
            if(r>=8&&r<=1024){
                var o=1==e?10:2==e?62:103,
                    a="";
                for(let e=0;e<o;e++)n[e]=t[e];
                for(let e=0;e<r;e++)a+=n[Math.floor(Math.random()*n.length)];
                return a
            }
            return "The password must be between 8 and 1024 characters"
        }
        return "The security level of the password is between 1 and 3."
    }
    return "An error has occurred."
};