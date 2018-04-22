const list = `A,B,C,D,E
boobs,silken,kitten,longed,ravish
a bust,creamy, mountain,lusted,climb
a butt,shiny,pillow,wished,invade
lips,ripe,ice cream cone,wanted,grope
an ass,juicy,tulip,resolved,marry
breasts,middle-aged,lake,dared,raw dog it with
hair,rippling,fortress,detested,caress
eyes,wrinkled,lemon,trembled,proposition
a voice,luscious,popsicle,thirsted,correct
curves,frigid,librarian,expected,emotionally manipulate
a rump,voluptuous,python,planned,spar with
legs,expensive,pony,deigned,compliment
a rear end,plump,melon,proposed,hire
mammaries,bountiful,bedsheet,shuddered,booty call
jugs,tempestuous,muffin,refused,mansplain to
calves,withered,bunny rabbit,hated,insult
a badonkadonk,haughty,fish,scorned,date
gams,shrill,princess,dreaded,teabag
knockers,fat,ghost,did not care,ignore
a complexion,dewy,waterfall,ached,fondle
a pout,soft,mango,intended,worship
hooters,wiry,harpy,hungered,examine
a booty,gleaming,ship,craved,manhandle
cheeks,withholding,nun,hankered,touch
thighs,bulbous,berry,needed,admire
tresses,brittle,car,pined,demand things from`;

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

const [, ...body] = list.split("\n");

const table = body.map((d, i) => {
  const words = d.split(",");

  const [A, B, C, D, E] = words;

  return {
    alpha: alphabet[i],
    A,
    B,
    C,
    D,
    E
  };
});

export default table;
