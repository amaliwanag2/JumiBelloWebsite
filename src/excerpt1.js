import React from "react";
const formatStringToCamelCase = (str) => {
  const splitted = str.split("-");
  if (splitted.length === 1) return splitted[0];
  return (
    splitted[0] +
    splitted
      .slice(1)
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join("")
  );
};

const style = (str) => {
  const style = {};
  str.split(";").forEach((el) => {
    const [property, value] = el.split(":");
    if (!property) return;

    const formattedProperty = formatStringToCamelCase(property.trim());
    style[formattedProperty] = value.trim();
  });

  return style;
};
export const Excerpt1 = () => (
  <>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-indent: 36pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        Don&rsquo;t do it,
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        &nbsp;a voice says, but I will anyway. I do it because I must. He
        deserves to know. Wait until all the other Chinese teachers leave the
        office for lunch. Lie, tell them politely that you&rsquo;ve brought
        lunch, but next time! I&rsquo;ll come!
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-indent: 36pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        &nbsp;This is a lie. I didn&rsquo;t bring anything for lunch, I always
        go out for&nbsp;
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        xialongbao&nbsp;
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        alone and I&rsquo;ve been dying,&nbsp;
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        dying
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        , to be included among their social eating mores for the past seven
        months I&rsquo;ve been teaching at this high school, but I need to use
        this hour I&rsquo;ve got alone. Make this quick. Maybe I can hurry to
        the 7-Eleven next to the school campus and grab a&nbsp;
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        xiaolongbao&nbsp;
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        because I&rsquo;m teaching at the top of the afternoon hour. I&rsquo;ll
        go hungry if I don&rsquo;t. We&rsquo;ll both go hungry if I
        don&rsquo;t.&nbsp;
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-indent: 36pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        I start in surprise at the thought. This is the first plural that
        I&rsquo;ve used. I&rsquo;m not alone anymore. A funny, lightweight
        feeling comes over my shoulders, as if I&rsquo;ve walked too close to
        the precipice of an edge and dared to look down. What&rsquo;s that
        feeling called?&nbsp;
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        Vertigo. A sensation that occurs with causes that don&rsquo;t have
        underlying disease.
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        &nbsp;There&rsquo;s a reason why fear and excitement have a razor-sharp
        line that divides the two, so sharp that I can straddle the line, one
        foot firmly planted in parallel worlds, body too split by extreme
        sensation to interpret whether what&rsquo;s happening is good or bad.
        The electricity of something being born and the voltage of something
        being destroyed. &nbsp;
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        I&rsquo;m not alone anymore. &nbsp;
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        &nbsp;
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-indent: 36pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        .
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-indent: 36pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        &nbsp;I don&rsquo;t understand, I say.&nbsp;
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-indent: 36pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        You&rsquo;re pregnant, Dr. Xu says, pulling her hand out.
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-indent: 36pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        I don&rsquo;t understand, I say again, the temperatures in my chest
        dancing between heat and cold, heat, heat, and cold.
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-indent: 36pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        What do you not understand? Dr. Xu asks, taking the gloves off with
        a&nbsp;
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#000000;background-color:transparent;font-weight:400;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        snap!
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-indent: 36pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        I don&rsquo;t understand, I say again, my voice raising to a shrill on
        the last syllable. My blood&rsquo;s temperature is kaleidoscopic,
        ribboning in my veins, tightening in the cold, spreading its fingers
        into the heat.
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-indent: 36pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        I don&rsquo;t understand I don&rsquo;t understand I don&rsquo;t
        understand
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-indent: 36pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        The next moment is the one I can&rsquo;t remember.
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-indent: 36pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        I come back, floating, into a body that&rsquo;s holding a warm cup of
        tea. Dr. Xu is sitting in front of me, legs crossed, fingers crossed,
        everything except her eyes, except my womb, including my heart,
        including my mind crossed. I take another sip, and immediately want to
        take another. This tea could only be from Alishan. I close my eyes. Dr.
        Xu breaks the silence.
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-indent: 36pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        Are you alright?
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-indent: 36pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        I want to laugh at the question, I want to say,&nbsp;
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#000000;background-color:transparent;font-weight:400;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        part of me is, part of me never will be.&nbsp;
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-indent: 36pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        I want to ask a question of my own.
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-indent: 36pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        I want to ask,&nbsp;
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#000000;background-color:transparent;font-weight:400;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        which part of me will this baby inherit? Which part of me will this baby
        live?
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-indent: 36pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        The other woman in me urges me.&nbsp;
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#000000;background-color:transparent;font-weight:400;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        Try
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        , she urges.&nbsp;
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#000000;background-color:transparent;font-weight:400;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        Ask the question.
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-indent: 36pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        I clear my throat, and Dr. Xu sits up straighter, leans slightly
        forward.
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-indent: 36pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        I&rsquo;m pregnant, I say.
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-indent: 36pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        Dr. Xu nods, the smile returning to her eyes. I want to smile too, but
        this woman doesn&rsquo;t understand.
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-indent: 36pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        I&rsquo;m on lithium, Dr. Xu.
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-indent: 36pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        A silence. I hate this silence. I hate what is happening inside of it.
        &nbsp;I watch the smile recede from her eyes, and with it, any hope that
        this woman will see me as the woman that I want so very much to be. Dr.
        Xu turns to her computer and looks at my medical chart, really looks at
        it the way a doctor should look at it, but never does. Most doctors just
        see a constellation of symptoms and ignore the history, ignore the
        person behind the problem. I like Dr. Xu because she is a doctor who
        hasn&rsquo;t looked first at the medical chart. I see when she sees my
        diagnosis, when she sees what all of this means for me.
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-indent: 36pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        Do you understand what this means? Lithium is highly dangerous during
        pregnancy.
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-indent: 36pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        It&rsquo;s dangerous?&nbsp;
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-indent: 36pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        Yes. You would have to stop taking it&nbsp;
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#000000;background-color:transparent;font-weight:400;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        immediately
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        . It&rsquo;s highly dangerous for the fetus.
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-indent: 36pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        I feel a weight on my sternum. A tiny bud of panic waiting to bloom.
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-indent: 36pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        I can&rsquo;t stop taking lithium, I need it&mdash;-
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-indent: 36pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        Dr. Xu breaks in.
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-indent: 36pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        Do you know that manic-depressive illness is genetic?
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-indent: 36pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        Yes, of course I know this, I reply, feeling the urge to recoil
        concentrate inside me. I suddenly wish my mother, or any woman who loves
        me was here, sitting next to me, holding my hand.&nbsp;
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-indent: 36pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        Dr. Xu doesn&rsquo;t hesitate in the swing of the ax.
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-indent: 36pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        You shouldn&rsquo;t have children, she says. You are too ill.
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-indent: 36pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        A long silence, a silence so long it becomes a new sound.
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-indent: 36pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        I become something new in this silence, too. I become a person who
        breaks that silence. I lean toward her.
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-indent: 36pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        Are you concerned about me having children because you think my illness
        would make me an inadequate mother or because you think it&rsquo;s best
        to avoid bringing another manic-depressive into the world?&nbsp;
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-indent: 36pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        I can&rsquo;t tell if Dr. Xu missed the bite of my sarcasm or if she
        didn&rsquo;t, when she says in the gentlest of voices:&nbsp;
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#000000;background-color:transparent;font-weight:400;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        both, Sum, both
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        .
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-indent: 36pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        I ask Dr. Xu to leave the room, put on the rest of my clothes, and knock
        on her office door.
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-indent: 36pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        Fuck you, Fangwen, I say, when she opens the door. I walk out.
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-indent: 36pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        I walk into the bathroom right outside the gynecology ward, sit down on
        a toilet shaking. I frantically unroll some toilet paper and stuff it
        into the mouth attached to a face that&rsquo;s hot enough to ignite. I
        ball my hand into a fist and punch it into the flesh above my knee,
        sobbing until I&rsquo;m exhausted. Someone gently knocks, but I ignore
        it. Brutality is a shapeshifter.&nbsp;
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-indent: 36pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        &nbsp;This is it. This is the last time anyone will ever want to touch
        me. I sit on the toilet and wish my mother was alive so that she could
        cradle my head the way I alone can do now. I want her to be alive more
        than I have ever wanted it. She&rsquo;s dead and she will stay dead and
        there&rsquo;s nobody to stand in this bathroom with me and tell me the
        right thing to think. Y
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#000000;background-color:transparent;font-weight:400;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        ou must stop taking the lithium immediately
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        , Dr. Xu says. I think about the way Dr. Xu said it to me, as if inside
        my body there were two lives, not just one. My life isn&rsquo;t the only
        one that matters.&nbsp;
      </span>
    </p>
    <p>
      <br />
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-indent: 36pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        It is because of this that I walk into one of the empty classrooms and
        lock the door. Lock the barrier between the life I have and the life I
        left behind. One of my hands goes into the bird&rsquo;s nest of my
        dreadlocks and reaches inside to scratch my scalp. I know the scratching
        will only deepen the visibility of my dandruff in my locks, but so what,
        it is fucking hot here and there aren&rsquo;t black people around to
        give you the Look, as your Auntie Reza would say, the one that tells you
        that you&rsquo;re overdue for a wash or an afternoon at the hair salon.
        The thought of your Auntie Reza is another jolt of voltage, a tiny&nbsp;
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        zap!&nbsp;
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        at your fingertips that you quickly shake off, but still remember.&nbsp;
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-indent: 36pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        Who are you kidding? When&nbsp;
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;margin-left: 144pt;text-indent: 36pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        have you&nbsp;
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;margin-left: 216pt;text-indent: 36pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        ever forgotten&nbsp;
      </span>
    </p>
    <p>
      <br />
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;margin-left: 216pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        any of the women
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;margin-left: 288pt;text-indent: 36pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        &nbsp;who&rsquo;ve left you?&nbsp;
      </span>
    </p>
    <p>
      <br />
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        You become aware of lying calmly on the ceiling.&nbsp;
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        You&rsquo;re watching the woman with dreadlocks, anxiously scratching
        her scalp. The top of her head could be a Jackson Pollack, a landscape
        splattered in salt and pepper. Her grandmother would tell her she needs
        to wash her hair more. Your grandmother.&nbsp;
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        Wait. You&rsquo;re Leaving.
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-indent: 36pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        Maybe you don&rsquo;t know what to do, but the woman knows what must be
        done. The woman stands still for a moment, the only movement the rise
        and fall of chest as she breathes. The woman with dreadlocks steps
        towards the classroom windows lining one of the walls and presses a
        sweaty hand against the window. She presses her cheek against it too.
        Feels its coldness against her skin. She leans into the coldness. You
        feel the coldness.
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        I&nbsp;
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        feel the coldness.
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        <span class="Apple-tab-span" style={style("white-space:pre;")}>
          &nbsp; &nbsp;&nbsp;
        </span>
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        I take a deep breath, another deep breath. I want to release a scream
        but instead say a note of thanks. I say it, not to God, but to someone
        that exists between a nothingness and God because I decided in high
        school that I could never believe in a God that could fuck Mary when she
        was just sixteen and had never fallen in love.
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        <span class="Apple-tab-span" style={style("white-space:pre;")}>
          &nbsp; &nbsp;&nbsp;
        </span>
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        My fingers move from the top of my head to scavenging for the pins that
        held my hair into place. I needed to feel my body right now, remember
        who I am, Sumatra the woman, not Sumatra the child. There&rsquo;s no
        more room for the child in me. I must make the room for another child.
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        <span class="Apple-tab-span" style={style("white-space:pre;")}>
          &nbsp; &nbsp;&nbsp;
        </span>
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        I let down my hair. My locks waterfall, hitting my shoulders with the
        same&nbsp;
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        humph
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        &nbsp;that snow makes when trees must shrug the weight, the sudden lift
        of my head, my neck straightening, relaxing me. My mouth opens into a
        tiny song of breath. I can&rsquo;t help but think that my hair
        hadn&rsquo;t been this long, hadn&rsquo;t been locked yet when I met
        him. As the phone rings, the dial tone deafens. I shouldn&rsquo;t be
        calling, but I know I must. He deserves to know.&nbsp;
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        Who are you kidding, Sum? You want to hear his voice.
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-indent: 36pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        The ringing abruptly stops, and the line picks up: the cluck-clucking
        crow of roosters dances between my ears. There is a brief scuffle on the
        other end of the line, then comes a low, melodic&nbsp;
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        hello-o-o who is calling&nbsp;
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        that is so typical of people in the Philippines, a hello so long it is
        both question and song. It makes me forget I am in a classroom in
        Beijing. It makes me smile. The person (a woman?) on the other end
        cannot hear my smile. A tinny&nbsp;
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        hello-o-o, who is calling
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        , sails through the receiver again.
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-indent: 36pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        I hesitate. This is my chance to hang up. Maybe he doesn&rsquo;t need to
        know. Although this would be difficult since he has been asking for
        several months. Pretend that I never wanted to call. Pretend that I
        don&rsquo;t have to call now. Because I do. I do need to call.
        &nbsp;Pretend you don&rsquo;t call. Pretend you never saw the simple
        message on your Facebook, the one that comes month after month even in
        the wall of my silence, the one from him that is so short and simple and
        straightforward (because he speaks a very impatient English).&nbsp;
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        Can we talk? Can you call me? Please.
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        &nbsp;A break in the line and then the simple&nbsp;
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        please.&nbsp;
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        It&rsquo;s like how they always say. Ask nicely and you shall receive.
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-indent: 36pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        Mara would tell me to ignore it. She&rsquo;d scoff. Tell me, delete it!
        He&rsquo;s not worth your time, in that way she always has a way of
        speaking as if leaving out the&nbsp;
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        of course!
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        &nbsp;at the end. She&rsquo;s always been zero tolerance towards meat
        and all men who break your heart. I&rsquo;ll never forget the look she
        gave me after I told her when you were nineteen that I hoped she&rsquo;d
        find a man who deserves her one day.&nbsp;
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-indent: 36pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        We&rsquo;d been laughing on her dormitory bed, finishing our last drink
        before heading out to some college party she wanted to attend. She had
        looked down at the floor, hiccupping and then asked in a tone that still
        carried the curve of laughter, why did you say that? I was still smiling
        as I turned to look at her, the smile slowly fading as her words
        registered. When she looked back at me, she wasn&rsquo;t laughing. She
        repeated the question, the line of her mouth becoming so thin it seemed
        to disappear into her face. I felt myself freezing, unsure of what to
        say next. I&rsquo;d meant the comment as a way of saying how much I
        loved her. The silence that ensued, and the way she looked at me felt a
        lot like the expression I suspect Julius gave Brutus before he drove the
        blade home. I couldn&rsquo;t figure out which of my words was the blade.
        I was too afraid to examine what about myself reminded me of Brutus.
        Watching her smile, I could see the shadow of pain that hid at its
        corner, and I watched her laugh it off, shrug it off, but it&rsquo;s
        never really gone. I knew this. You can&rsquo;t make something
        disappear, but rather put into a box of darkness. For our entire
        friendship, I had been telling myself that I was Julius, that I was
        waiting for her to wield the knife, and I didn&rsquo;t mind, I thought
        at least I can leave this world knowing what it feels like to be
        connected, that I wouldn&rsquo;t have to leave with regrets with how I
        lived, and yet here I was, with blood on my hands. I couldn&rsquo;t
        figure out what I&rsquo;d done. It was the first time I could remember
        with a person wanting to take it all back.
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-indent: 36pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        &nbsp;She became even more righteous from all the feminist group
        meetings she would attend at her college in Philadelphia while I was in
        college at Iowa. No, let&rsquo;s be real here. It&rsquo;s because
        she&rsquo;s got a mother from Israel, one of the only countries in the
        world with a mandatory military service requirement for women. I&rsquo;d
        always wished I could be more like her. Be the type of person to make
        notes in the margins of people she&rsquo;s mad at, underline everything
        she reads, underline a whole essay on Rilke except the part where Rilke
        says love means to deny the self and to be consumed in flames. Be
        vegetarian, be good to your body and all that nutrition crap she is
        always saying about how your body is your temple. Maybe if I listened to
        her, my skin would be flawless and I&rsquo;d have a waistline like hers
        that can fit into all those damn pencil skirts she wears.
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-indent: 36pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        This is what I tell myself in her voice. Ignore him. He&rsquo;s not
        worth your time. But unfortunately, I am not Mara. I don&rsquo;t have a
        mother from Israel and I didn&rsquo;t attend feminist group meetings at
        nineteen, but I do have a father from Nigeria and I did leave home
        (America too, for that matter) and move halfway around the world to
        teach English on a tiny island in East Asia. I wouldn&rsquo;t underline
        anything that Rilke said except the part love means to deny the self and
        to be consumed in flames. That&rsquo;s the type of person I found myself
        to be when I met him. When I fell in love with someone who is unlike
        anyone I&rsquo;ve ever known. So besides Mara&rsquo;s voice, I hear
        another voice. A voice that sounds more like mine. A voice that I
        haven&apos;t heard in a long time.&nbsp;
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        Something has happened
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        , this voice says.
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        &nbsp;There is a child now. Your child. His child.
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        &nbsp;The second reason is the excuse I give myself to haltingly say
        into the telephone, it&rsquo;s me. Sum.
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        A heavy pause.
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        Sum? Surprise enters the woman&apos;s tone.&nbsp;
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        Sum?&nbsp;
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        She definitely recognizes my name. It must be his mother. She has always
        loved me. About two months ago, she told me I should call more often so
        she can practice her English. She had just gotten a job as a housekeeper
        in one of the tourist hotels in Coron. She had been very relieved to get
        the job since she needed money for Selia&rsquo;s medical bills.
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        Yes, I reply, a smile entering my voice. This is Sumatra. Is Ed
        there?&nbsp;
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        Why are you calling? How did you get this number?
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        These questions halt me once again. The smile wavers. His mother would
        never ask this. Confusion draws my response out more slowly. I ask
        guardedly, who is this?
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        He asked me to call, I add. He gave me this number.
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        The feeling this phone call is a mistake doggedly rises.&nbsp;
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        But it&rsquo;s not a mistake,&nbsp;
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        a voice says.&nbsp;
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        It&rsquo;s a child. His child. He must know. They all must know in case
        something happens to you. In case you disappear.
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        I take a deep breath and skirt around the feelings those thoughts bring
        up in me. I&rsquo;m not ready to think through them yet.&nbsp;
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        Tell him before it&rsquo;s too late.&nbsp;
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        There&rsquo;s another scuffle in the background, louder this time, as I
        hear people entering the same room as the woman. I hear my name being
        said over and over in a Tagalog conversation that erupts among the
        people in the background, a stack of dominoes being tipped over, I
        listen to it with the same awful fascination people have with witnessing
        the demolition of a building.
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        &nbsp;
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        The connection must be shit, because the woman pauses to say something
        in Tagalog to the people around her and asks the same question,
        something strange and sharp entering her voice.
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        Why are you calling? She demands again. How did you get this number?
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        The feeling that I am watching something crumbling grows. I tread
        carefully now. Ed asked me to call, I say. I know that you must know
        that we--
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        I break off. Take a small breath, as I stare at my fingers begin to
        tremble. Then I remember that the woman on the other end cannot hear the
        trembling, so I leap for the conversational reins.&nbsp;
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        I ask,&nbsp;
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        who is this
      </span>
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        ?
      </span>
    </p>
    <p
      dir="ltr"
      style={style(
        "line-height:2.4;text-align: justify;margin-top:0pt;margin-bottom:0pt;"
      )}
    >
      <span
        style={style(
          "font-size:12pt;font-family:'Libre Baskerville',serif;color:#1d1d1d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"
        )}
      >
        The woman answers without hesitation. I&apos;m Jessa. His wife.
      </span>
    </p>
  </>
);
