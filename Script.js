const randomMessageGenerator = () => {
    const secOne = ['Your Mum','Your Dad','Your breath','Your nose','Your face'];
    const secTwo = ['likes','eats','smells like','gargles'];
    const secThree = ['sweaty balls','tramps feet', 'old mans crotch','Donald Trump\'s wig glue'];

    return `${secOne[Math.floor(Math.random()*secOne.length)]} ${secTwo[Math.floor(Math.random()*secTwo.length)]} ${secThree[Math.floor(Math.random()*secThree.length)]}`



}

console.log(randomMessageGenerator());
