import React, { useState } from "react";
import logo from "./logo.svg";
import mainPhoto from "./mainPhoto.png";
import jumi from "./jumi.png";
import readMe from "./readMe.svg";
import "./App.css";

function App() {
  const [readMode, setReadMode] = useState(false);
  const readMeOnClick = () => setReadMode((prevState) => !prevState);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#E5E5E5",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          width: "100vw",
        }}
      >
        <img src={logo} alt="logo" />
        <img src={mainPhoto} style={{ width: "96vw" }} alt="cover" />
      </div>
      {/*book section */}
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
          backgroundColor: "#E5E5E5",
        }}
      >
        {!readMode ? (
          <>
            <div
              style={{
                height: "600px",
                width: "403px",
                position: "absolute",
                background: "#FEFDFD",
                boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.1)",
                borderRadius: "2px",
              }}
            ></div>
            <div
              style={{
                height: "600px",
                width: "403px",
                position: "absolute",
                background: "#FEFDFD",
                boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.1)",
                borderRadius: "2px",
                transform: "rotate(-3.39deg)",
              }}
            ></div>
            <div
              style={{
                height: "600px",
                width: "403px",
                position: "absolute",
                background: "#FEFDFD",
                boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.1)",
                borderRadius: "2px",
                transform: "rotate(-2.37deg)",
              }}
            ></div>
            <h1 style={{ zIndex: 5 }}>The Leaving</h1>
            <p
              style={{
                position: "absolute",
                marginTop: "200px",
                fontFamily: "'Rubik', sans-serif",
                fontSize: "16px",
              }}
            >
              an excerpt
            </p>
            <img
              onClick={readMeOnClick}
              src={readMe}
              alt="read me"
              height="70px"
              style={{
                zIndex: 10,
                cursor: "pointer",
                position: "absolute",
                marginLeft: "420px",
                marginTop: "300px",
              }}
            />{" "}
          </>
        ) : (
          <div
            style={{
              width: "90vw",
              maxWidth: "1125px",
              height: "86vh",
              maxHeight: "950px",
              background: "#FEFDFD",
              boxShadow: "2px 5px 100px rgba(19, 18, 13, 0.1)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                height: "65px",
              }}
            >
              <p
                style={{
                  // position: "absolute",
                  marginTop: "30px",
                  marginLeft: "40px",
                  fontFamily: "'Rubik', sans-serif",
                  fontSize: "16px",
                }}
              >
                the leaving
              </p>
              <p
                style={{
                  // position: "absolute",
                  marginTop: "30px",
                  marginRight: "40px",
                  fontFamily: "'Rubik', sans-serif",
                  fontSize: "16px",
                }}
              >
                (an excerpt)
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                height: "calc(100% - 85px)",
              }}
            >
              <div
                style={{
                  width: "33%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <p style={{ marginTop: "60px", fontStyle: "italic" }}>
                  Twenty-eight, Beijing
                </p>
              </div>
              <div
                style={{
                  width: "calc(67%)",
                  maxWidth: "633px",
                  overflowY: "scroll",
                  height: "100%",
                  cursor: "all-scroll",
                  marginRight: "30px",
                }}
              >
                <p>
                  Don&rsquo;t do it, a voice says, but I will anyway. I do it
                  because I must. He deserves to know. Wait until all the other
                  Chinese teachers leave the office for lunch. Lie, tell them
                  politely that you&rsquo;ve brought lunch, but next time!
                  I&rsquo;ll come!
                </p>
                <p>
                  &nbsp;This is a lie. I didn&rsquo;t bring anything for lunch,
                  I always go out for xialongbao alone and I&rsquo;ve been
                  dying, dying, to be included among their social eating mores
                  for the past seven months I&rsquo;ve been teaching at this
                  high school, but I need to use this hour I&rsquo;ve got alone.
                  Make this quick. Maybe I can hurry to the 7-Eleven next to the
                  school campus and grab a xiaolongbao because I&rsquo;m
                  teaching at the top of the afternoon hour. I&rsquo;ll go
                  hungry if I don&rsquo;t. We&rsquo;ll both go hungry if I
                  don&rsquo;t.&nbsp;
                </p>
                <p>
                  I start in surprise at the thought. This is the first plural
                  that I&rsquo;ve used. I&rsquo;m not alone anymore. A funny,
                  lightweight feeling comes over my shoulders, as if I&rsquo;ve
                  walked too close to the precipice of an edge and dared to look
                  down. What&rsquo;s that feeling called? Vertigo. A sensation
                  that occurs with causes that don&rsquo;t have underlying
                  disease. There&rsquo;s a reason why fear and excitement have a
                  razor-sharp line that divides the two, so sharp that I can
                  straddle the line, one foot firmly planted in parallel worlds,
                  body too split by extreme sensation to interpret whether
                  what&rsquo;s happening is good or bad. The electricity of
                  something being born and the voltage of something being
                  destroyed. &nbsp;I&rsquo;m not alone anymore. &nbsp;&nbsp;
                </p>
                <p>.</p>
                <p>&nbsp;I don&rsquo;t understand, I say.&nbsp;</p>
                <p>You&rsquo;re pregnant, Dr. Xu says, pulling her hand out.</p>
                <p>
                  I don&rsquo;t understand, I say again, the temperatures in my
                  chest dancing between heat and cold, heat, heat, and cold.
                </p>
                <p>
                  What do you not understand? Dr. Xu asks, taking the gloves off
                  with a snap!
                </p>
                <p>
                  I don&rsquo;t understand, I say again, my voice raising to a
                  shrill on the last syllable. My blood&rsquo;s temperature is
                  kaleidoscopic, ribboning in my veins, tightening in the cold,
                  spreading its fingers into the heat.
                </p>
                <p>
                  I don&rsquo;t understand I don&rsquo;t understand I
                  don&rsquo;t understand
                </p>
                <p>The next moment is the one I can&rsquo;t remember.</p>
                <p>
                  I come back, floating, into a body that&rsquo;s holding a warm
                  cup of tea. Dr. Xu is sitting in front of me, legs crossed,
                  fingers crossed, everything except her eyes, except my womb,
                  including my heart, including my mind crossed. I take another
                  sip, and immediately want to take another. This tea could only
                  be from Alishan. I close my eyes. Dr. Xu breaks the silence.
                </p>
                <p>Are you alright?</p>
                <p>
                  I want to laugh at the question, I want to say, part of me is,
                  part of me never will be.&nbsp;
                </p>
                <p>I want to ask a question of my own.</p>
                <p>
                  I want to ask, which part of me will this baby inherit? Which
                  part of me will this baby live?
                </p>
                <p>
                  The other woman in me urges me. Try, she urges. Ask the
                  question.
                </p>
                <p>
                  I clear my throat, and Dr. Xu sits up straighter, leans
                  slightly forward.
                </p>
                <p>I&rsquo;m pregnant, I say.</p>
                <p>
                  Dr. Xu nods, the smile returning to her eyes. I want to smile
                  too, but this woman doesn&rsquo;t understand.
                </p>
                <p>I&rsquo;m on lithium, Dr. Xu.</p>
                <p>
                  A silence. I hate this silence. I hate what is happening
                  inside of it. &nbsp;I watch the smile recede from her eyes,
                  and with it, any hope that this woman will see me as the woman
                  that I want so very much to be. Dr. Xu turns to her computer
                  and looks at my medical chart, really looks at it the way a
                  doctor should look at it, but never does. Most doctors just
                  see a constellation of symptoms and ignore the history, ignore
                  the person behind the problem. I like Dr. Xu because she is a
                  doctor who hasn&rsquo;t looked first at the medical chart. I
                  see when she sees my diagnosis, when she sees what all of this
                  means for me.
                </p>
                <p>
                  Do you understand what this means? Lithium is highly dangerous
                  during pregnancy.
                </p>
                <p>It&rsquo;s dangerous?&nbsp;</p>
                <p>
                  Yes. You would have to stop taking it immediately. It&rsquo;s
                  highly dangerous for the fetus.
                </p>
                <p>
                  I feel a weight on my sternum. A tiny bud of panic waiting to
                  bloom.
                </p>
                <p>I can&rsquo;t stop taking lithium, I need it&mdash;-</p>
                <p>Dr. Xu breaks in.</p>
                <p>Do you know that manic-depressive illness is genetic?</p>
                <p>
                  Yes, of course I know this, I reply, feeling the urge to
                  recoil concentrate inside me. I suddenly wish my mother, or
                  any woman who loves me was here, sitting next to me, holding
                  my hand.&nbsp;
                </p>
                <p>Dr. Xu doesn&rsquo;t hesitate in the swing of the ax.</p>
                <p>
                  You shouldn&rsquo;t have children, she says. You are too ill.
                </p>
                <p>A long silence, a silence so long it becomes a new sound.</p>
                <p>
                  I become something new in this silence, too. I become a person
                  who breaks that silence. I lean toward her.
                </p>
                <p>
                  Are you concerned about me having children because you think
                  my illness would make me an inadequate mother or because you
                  think it&rsquo;s best to avoid bringing another
                  manic-depressive into the world?&nbsp;
                </p>
                <p>
                  I can&rsquo;t tell if Dr. Xu missed the bite of my sarcasm or
                  if she didn&rsquo;t, when she says in the gentlest of voices:
                  both, Sum, both.
                </p>
                <p>
                  I ask Dr. Xu to leave the room, put on the rest of my clothes,
                  and knock on her office door.
                </p>
                <p>
                  Fuck you, Fangwen, I say, when she opens the door. I walk out.
                </p>
                <p>
                  I walk into the bathroom right outside the gynecology ward,
                  sit down on a toilet shaking. I frantically unroll some toilet
                  paper and stuff it into the mouth attached to a face
                  that&rsquo;s hot enough to ignite. I ball my hand into a fist
                  and punch it into the flesh above my knee, sobbing until
                  I&rsquo;m exhausted. Someone gently knocks, but I ignore it.
                  Brutality is a shapeshifter.&nbsp;
                </p>
                <p>
                  &nbsp;This is it. This is the last time anyone will ever want
                  to touch me. I sit on the toilet and wish my mother was alive
                  so that she could cradle my head the way I alone can do now. I
                  want her to be alive more than I have ever wanted it.
                  She&rsquo;s dead and she will stay dead and there&rsquo;s
                  nobody to stand in this bathroom with me and tell me the right
                  thing to think. You must stop taking the lithium immediately,
                  Dr. Xu says. I think about the way Dr. Xu said it to me, as if
                  inside my body there were two lives, not just one. My life
                  isn&rsquo;t the only one that matters.&nbsp;
                </p>
                <p>
                  <br />
                </p>
                <p>
                  It is because of this that I walk into one of the empty
                  classrooms and lock the door. Lock the barrier between the
                  life I have and the life I left behind. One of my hands goes
                  into the bird&rsquo;s nest of my dreadlocks and reaches inside
                  to scratch my scalp. I know the scratching will only deepen
                  the visibility of my dandruff in my locks, but so what, it is
                  fucking hot here and there aren&rsquo;t black people around to
                  give you the Look, as your Auntie Reza would say, the one that
                  tells you that you&rsquo;re overdue for a wash or an afternoon
                  at the hair salon. The thought of your Auntie Reza is another
                  jolt of voltage, a tiny zap! at your fingertips that you
                  quickly shake off, but still remember.&nbsp;
                </p>
                <p>Who are you kidding? When&nbsp;</p>
                <p>have you&nbsp;</p>
                <p>ever forgotten&nbsp;</p>
                <p>
                  <br />
                </p>
                <p>any of the women</p>
                <p>&nbsp;who&rsquo;ve left you?&nbsp;</p>
                <p>
                  <br />
                </p>
                <p>You become aware of lying calmly on the ceiling.&nbsp;</p>
                <p>
                  You&rsquo;re watching the woman with dreadlocks, anxiously
                  scratching her scalp. The top of her head could be a Jackson
                  Pollack, a landscape splattered in salt and pepper. Her
                  grandmother would tell her she needs to wash her hair more.
                  Your grandmother. Wait. You&rsquo;re Leaving.
                </p>
                <p>
                  Maybe you don&rsquo;t know what to do, but the woman knows
                  what must be done. The woman stands still for a moment, the
                  only movement the rise and fall of chest as she breathes. The
                  woman with dreadlocks steps towards the classroom windows
                  lining one of the walls and presses a sweaty hand against the
                  window. She presses her cheek against it too. Feels its
                  coldness against her skin. She leans into the coldness. You
                  feel the coldness.
                </p>
                <p>I feel the coldness.</p>
                <p>
                  <span style={{ whiteSpace: "pre" }}>&nbsp; &nbsp;&nbsp;</span>
                  I take a deep breath, another deep breath. I want to release a
                  scream but instead say a note of thanks. I say it, not to God,
                  but to someone that exists between a nothingness and God
                  because I decided in high school that I could never believe in
                  a God that could fuck Mary when she was just sixteen and had
                  never fallen in love.
                </p>
                <p>
                  <span style={{ whiteSpace: "pre" }}>&nbsp; &nbsp;&nbsp;</span>
                  My fingers move from the top of my head to scavenging for the
                  pins that held my hair into place. I needed to feel my body
                  right now, remember who I am, Sumatra the woman, not Sumatra
                  the child. There&rsquo;s no more room for the child in me. I
                  must make the room for another child.
                </p>
                <p>
                  <span style={{ whiteSpace: "pre" }}>&nbsp; &nbsp;&nbsp;</span>
                  I let down my hair. My locks waterfall, hitting my shoulders
                  with the same humph that snow makes when trees must shrug the
                  weight, the sudden lift of my head, my neck straightening,
                  relaxing me. My mouth opens into a tiny song of breath. I
                  can&rsquo;t help but think that my hair hadn&rsquo;t been this
                  long, hadn&rsquo;t been locked yet when I met him. As the
                  phone rings, the dial tone deafens. I shouldn&rsquo;t be
                  calling, but I know I must. He deserves to know. Who are you
                  kidding, Sum? You want to hear his voice.
                </p>
                <p>
                  The ringing abruptly stops, and the line picks up: the
                  cluck-clucking crow of roosters dances between my ears. There
                  is a brief scuffle on the other end of the line, then comes a
                  low, melodic hello-o-o who is calling that is so typical of
                  people in the Philippines, a hello so long it is both question
                  and song. It makes me forget I am in a classroom in Beijing.
                  It makes me smile. The person (a woman?) on the other end
                  cannot hear my smile. A tinny hello-o-o, who is calling, sails
                  through the receiver again.
                </p>
                <p>
                  I hesitate. This is my chance to hang up. Maybe he
                  doesn&rsquo;t need to know. Although this would be difficult
                  since he has been asking for several months. Pretend that I
                  never wanted to call. Pretend that I don&rsquo;t have to call
                  now. Because I do. I do need to call. &nbsp;Pretend you
                  don&rsquo;t call. Pretend you never saw the simple message on
                  your Facebook, the one that comes month after month even in
                  the wall of my silence, the one from him that is so short and
                  simple and straightforward (because he speaks a very impatient
                  English). Can we talk? Can you call me? Please. A break in the
                  line and then the simple please. It&rsquo;s like how they
                  always say. Ask nicely and you shall receive.
                </p>
                <p>
                  Mara would tell me to ignore it. She&rsquo;d scoff. Tell me,
                  delete it! He&rsquo;s not worth your time, in that way she
                  always has a way of speaking as if leaving out the of course!
                  at the end. She&rsquo;s always been zero tolerance towards
                  meat and all men who break your heart. I&rsquo;ll never forget
                  the look she gave me after I told her when you were nineteen
                  that I hoped she&rsquo;d find a man who deserves her one
                  day.&nbsp;
                </p>
                <p>
                  We&rsquo;d been laughing on her dormitory bed, finishing our
                  last drink before heading out to some college party she wanted
                  to attend. She had looked down at the floor, hiccupping and
                  then asked in a tone that still carried the curve of laughter,
                  why did you say that? I was still smiling as I turned to look
                  at her, the smile slowly fading as her words registered. When
                  she looked back at me, she wasn&rsquo;t laughing. She repeated
                  the question, the line of her mouth becoming so thin it seemed
                  to disappear into her face. I felt myself freezing, unsure of
                  what to say next. I&rsquo;d meant the comment as a way of
                  saying how much I loved her. The silence that ensued, and the
                  way she looked at me felt a lot like the expression I suspect
                  Julius gave Brutus before he drove the blade home. I
                  couldn&rsquo;t figure out which of my words was the blade. I
                  was too afraid to examine what about myself reminded me of
                  Brutus. Watching her smile, I could see the shadow of pain
                  that hid at its corner, and I watched her laugh it off, shrug
                  it off, but it&rsquo;s never really gone. I knew this. You
                  can&rsquo;t make something disappear, but rather put into a
                  box of darkness. For our entire friendship, I had been telling
                  myself that I was Julius, that I was waiting for her to wield
                  the knife, and I didn&rsquo;t mind, I thought at least I can
                  leave this world knowing what it feels like to be connected,
                  that I wouldn&rsquo;t have to leave with regrets with how I
                  lived, and yet here I was, with blood on my hands. I
                  couldn&rsquo;t figure out what I&rsquo;d done. It was the
                  first time I could remember with a person wanting to take it
                  all back.
                </p>
                <p>
                  &nbsp;She became even more righteous from all the feminist
                  group meetings she would attend at her college in Philadelphia
                  while I was in college at Iowa. No, let&rsquo;s be real here.
                  It&rsquo;s because she&rsquo;s got a mother from Israel, one
                  of the only countries in the world with a mandatory military
                  service requirement for women. I&rsquo;d always wished I could
                  be more like her. Be the type of person to make notes in the
                  margins of people she&rsquo;s mad at, underline everything she
                  reads, underline a whole essay on Rilke except the part where
                  Rilke says love means to deny the self and to be consumed in
                  flames. Be vegetarian, be good to your body and all that
                  nutrition crap she is always saying about how your body is
                  your temple. Maybe if I listened to her, my skin would be
                  flawless and I&rsquo;d have a waistline like hers that can fit
                  into all those damn pencil skirts she wears.
                </p>
                <p>
                  This is what I tell myself in her voice. Ignore him.
                  He&rsquo;s not worth your time. But unfortunately, I am not
                  Mara. I don&rsquo;t have a mother from Israel and I
                  didn&rsquo;t attend feminist group meetings at nineteen, but I
                  do have a father from Nigeria and I did leave home (America
                  too, for that matter) and move halfway around the world to
                  teach English on a tiny island in East Asia. I wouldn&rsquo;t
                  underline anything that Rilke said except the part love means
                  to deny the self and to be consumed in flames. That&rsquo;s
                  the type of person I found myself to be when I met him. When I
                  fell in love with someone who is unlike anyone I&rsquo;ve ever
                  known. So besides Mara&rsquo;s voice, I hear another voice. A
                  voice that sounds more like mine. A voice that I haven&apos;t
                  heard in a long time. Something has happened, this voice says.
                  There is a child now. Your child. His child. The second reason
                  is the excuse I give myself to haltingly say into the
                  telephone, it&rsquo;s me. Sum.
                </p>
                <p>A heavy pause.</p>
                <p>
                  Sum? Surprise enters the woman&apos;s tone. Sum? She
                  definitely recognizes my name. It must be his mother. She has
                  always loved me. About two months ago, she told me I should
                  call more often so she can practice her English. She had just
                  gotten a job as a housekeeper in one of the tourist hotels in
                  Coron. She had been very relieved to get the job since she
                  needed money for Selia&rsquo;s medical bills.
                </p>
                <p>
                  Yes, I reply, a smile entering my voice. This is Sumatra. Is
                  Ed there?&nbsp;
                </p>
                <p>Why are you calling? How did you get this number?</p>
                <p>
                  These questions halt me once again. The smile wavers. His
                  mother would never ask this. Confusion draws my response out
                  more slowly. I ask guardedly, who is this?
                </p>
                <p>He asked me to call, I add. He gave me this number.</p>
                <p>
                  The feeling this phone call is a mistake doggedly rises. But
                  it&rsquo;s not a mistake, a voice says. It&rsquo;s a child.
                  His child. He must know. They all must know in case something
                  happens to you. In case you disappear.
                </p>
                <p>
                  I take a deep breath and skirt around the feelings those
                  thoughts bring up in me. I&rsquo;m not ready to think through
                  them yet. Tell him before it&rsquo;s too late. There&rsquo;s
                  another scuffle in the background, louder this time, as I hear
                  people entering the same room as the woman. I hear my name
                  being said over and over in a Tagalog conversation that erupts
                  among the people in the background, a stack of dominoes being
                  tipped over, I listen to it with the same awful fascination
                  people have with witnessing the demolition of a building. The
                  connection must be shit, because the woman pauses to say
                  something in Tagalog to the people around her and asks the
                  same question, something strange and sharp entering her voice.
                </p>
                <p>
                  Why are you calling? She demands again. How did you get this
                  number?
                </p>
                <p>
                  The feeling that I am watching something crumbling grows. I
                  tread carefully now. Ed asked me to call, I say. I know that
                  you must know that we--
                </p>
                <p>
                  I break off. Take a small breath, as I stare at my fingers
                  begin to tremble. Then I remember that the woman on the other
                  end cannot hear the trembling, so I leap for the
                  conversational reins.&nbsp;
                </p>
                <p>I ask, who is this?</p>
                <p>
                  The woman answers without hesitation. I&apos;m Jessa. His
                  wife.
                </p>
                <p>
                  <br />
                </p>
                <p>
                  I refuse to have a doctor tell you the story of how you came
                  to be. I refuse to have someone else speak for me or put my
                  letters into some shitty file cabinet never to be opened
                  again. You can&rsquo;t burn the sound of my voice or put it
                  into a drawer, so these tapes will do. I want to use what is
                  remaining to tell you what no one else will. I&rsquo;m
                  frightened of who I&rsquo;ve become if you&rsquo;re listening
                  to this.&nbsp;
                </p>
                <p>
                  But there&rsquo;s one thing I&rsquo;m frightened of more: that
                  if this account doesn&rsquo;t exist, you won&rsquo;t know how
                  much I love you, wherever I am, whether it&rsquo;s in this
                  world or the next. I&rsquo;ve been gone for a long long time,
                  and I&rsquo;m still gone, but maybe regard this message as a
                  telegram from a faraway place, and the traveler intends to
                  come home to you. Maybe regard these messages as an intention
                  to return, even if the returning never happens. Just know
                  this: I&rsquo;m trying to come home. I&rsquo;m trying to
                  return.&nbsp;
                </p>
                <p>
                  You deserve to know that you came from a place of love,
                  however fleeting that place was. Just know that place where
                  I&rsquo;ve disappeared, is also the place where you begin.
                  That a human being&rsquo;s birth dooms it to death is a truth
                  impossible to escape. Maybe your birth will be the death of
                  me. Or hopefully, a version of me that I hope you never
                  meet.&nbsp;
                </p>
                <p>
                  I have never been compelled to keep an account of my life. To
                  write my life would mean I would have to examine it, to see
                  what kind of person I could have become, and who I became
                  instead, whether I was good enough and whether all the things
                  I&rsquo;ve been told about myself are true. To be young, to be
                  black, to be a woman is to face your own destruction in
                  innumerable ways or to flee it or the knowledge of it, or all
                  these things are once. &nbsp;This is before illness opens the
                  door. To struggle is a poetry of survival, not of defeat. I
                  want more than anything for us to survive. Both of us.
                </p>
                <p>
                  <span style={{ whiteSpace: "pre" }}>&nbsp; &nbsp;&nbsp;</span>
                  For once, I&rsquo;d like to tell the story from the view of
                  the madwoman in the attic, because that madwoman is your
                  mother, and before you listen to anyone else&rsquo;s
                  descriptions of the attic, considering listening to the one
                  who has lived inside it. Consider listening to the madwoman
                  tell stories about the life she lived before living in the
                  attic. Consider that there are people who miss the madwoman.
                  Consider that the madwoman is a woman. Better to hear the
                  story from me than from projections and categories and
                  diagnoses and labels and bullshit DSM designations and the
                  false fictions that society likes to weave from the fabric of
                  us.&nbsp;
                </p>
                <p>
                  Suppose I were to begin by calling my madness The Leaving, the
                  happening that takes my heart and turns it suddenly into two,
                  beating hearts. The Leaving is exactly what it sounds like,
                  but it&rsquo;s more: it&rsquo;s standing in a field, and then
                  suddenly being above it, without having ever left. I am the
                  woman still standing, standing still, unmoving, and also the
                  woman, floating somewhere above, long fingers gripping a jar
                  that hums. How do we both live, breathe, when only one is
                  carrying what&rsquo;s real? This is the obvious question, the
                  one&nbsp;
                </p>
                <p>
                  I ask myself and never ask myself, because the answer seems to
                  live in the tunnel that carries me from that world to this.
                  Maybe somewhere sleeps a slightly sheared DNA strand that was
                  waiting for the current to take it down the river of my blood,
                  transform me into a phantom us, into something new under a
                  full moon. &nbsp;I used to hope it would turn me into
                  something powerful, turn me into something brave. I understand
                  now that to be brave is not to be absent of fear, but to
                  embrace it. Fear is the frightened man, with the quivering gun
                  shouting, just do what I say. Courage is the woman stepping
                  into the gun, letting its maw of death kiss her belly as she
                  says with arms outstretched, do what you will. I&rsquo;m
                  trying to be this woman. I&rsquo;m here because I want to come
                  home. I want to stop Leaving.&nbsp;
                </p>
                <p>
                  I didn&rsquo;t enter this world broken. Love brought me down
                  the river to here, brought me here whole. I was, at one point,
                  whole. &nbsp;Maybe what I&rsquo;m trying to say is I
                  didn&rsquo;t just show up in this life already destroyed. I
                  think of that river that runs somewhere to the ocean within
                  me, never to be seen again. I want what any river wants. I
                  want to come home.
                </p>
                <p>
                  <br />
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="About">
        <img src={jumi} className="Halfpage" alt="auth" />
        <div className="Halfpage">
          <h1>about</h1>
          <p>
            Lectus eget faucibus tristique convallis. Sit enim nunc quis eget.
            Euismod egestas gravida sed sed. Mauris fermentum sit et est,
            tristique. Non diam mattis lacinia vitae a. Duis tristique etiam
            suspendisse erat cursus malesuada convallis elit enim. Risus nulla
            nec condimentum venenatis.
          </p>
          <p>
            Tortor blandit sagittis augue vitae nullam pellentesque. In urna in
            netus mauris velit molestie pellentesque auctor tortor. Morbi
            pellentesque vitae quis vitae enim, viverra. Leo quis id ullamcorper
            nunc commodo varius blandit erat. Urna velit arcu tempus nunc at.
            Justo, ornare tortor quis ac tristique enim et. Ligula duis amet,
            sed purus, morbi ut viverra quis feugiat. Pellentesque cursus odio
            et egestas sit suspendisse nunc.
          </p>
          <p>
            Id nunc nulla sed maecenas sed. Bibendum augue tempor sit iaculis
            leo mauris viverra commodo. Risus enim nulla nisl arcu curabitur
            integer ut. Semper habitant erat ultrices vel fringilla cursus. Vel
            venenatis tortor tempor, gravida non. Quis ac blandit vivamus etiam
            faucibus et vitae. Egestas nibh ut felis quam massa id amet
            condimentum. Integer sagittis turpis egestas ut purus consequat
            massa sed nec. Pulvinar duis in placerat varius neque, viverra
            ultricies. Facilisis purus dictum eu sem.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
