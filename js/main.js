var verbTensesTableApp = angular.module('verbTensesTableApp', []);

/*
verbTensesTableApp.config( [ "$locationProvider", "$routeProvider",
    function config( $locationProvider, $routeProvider ) {
        $locationProvider.hashPrefix('!');
        debugger;
        $routeProvider.
            when( "/:originalVerb", {
                templateUrl: "index.html",
                controller: "MainController"
            }).
            otherwise( "/play" );
    }
]);
*/

verbTensesTableApp.controller('MainController', [ "$scope",
    function MainController( $scope ) {
        var verbInPictures = {
            "pack": "pictures/pack.png",
            "paint": "pictures/paint.png",
            "pull": "pictures/pull.png",
            "push": "pictures/push.png",
            "scrub": "pictures/scrub.png",
            "see": "pictures/see.png",
            "skip": "pictures/skip.png",
            "swim": "pictures/swim.png",
            "walk": "pictures/walk.png",
            "skate": "pictures/skate.png",
            "sweep": "pictures/sweep.png",
            "turn": "pictures/turn.png"
        };
        var irregularVerbs = {
            //"abide": {  baseFrom: "abide", pastSimple: "abode/Abided", pastParticiple: "abode/Abided/Abidden" },
            //"alight": {  baseFrom: "alight", pastSimple: "alit/Alighted", pastParticiple: "alit/Alighted" },
            "arise": {  baseFrom: "arise", pastSimple: "arose", pastParticiple: "arisen" },
            "awake": {  baseFrom: "awake", pastSimple: "awoke", pastParticiple: "awoken" },
            "be": {  baseFrom: "be", pastSimple: "was/were", pastParticiple: "been" },
            "bear": {  baseFrom: "bear", pastSimple: "bore", pastParticiple: "born/borne" },
            "beat": {  baseFrom: "beat", pastSimple: "beat", pastParticiple: "beaten" },
            "become": {  baseFrom: "become", pastSimple: "became", pastParticiple: "become" },
            "begin": {  baseFrom: "begin", pastSimple: "began", pastParticiple: "begun" },
            "behold": {  baseFrom: "behold", pastSimple: "beheld", pastParticiple: "beheld" },
            "bend": {  baseFrom: "bend", pastSimple: "bent", pastParticiple: "bent" },
            "bet": {  baseFrom: "bet", pastSimple: "bet", pastParticiple: "bet" },
            "bid": {  baseFrom: "bid", pastSimple: "bade", pastParticiple: "bidden" },
            //"bid": {  baseFrom: "bid", pastSimple: "bid", pastParticiple: "bid" },
            "bind": {  baseFrom: "bind", pastSimple: "bound", pastParticiple: "bound" },
            "bite": {  baseFrom: "bite", pastSimple: "bit", pastParticiple: "bitten" },
            "bleed": {  baseFrom: "bleed", pastSimple: "bled", pastParticiple: "bled" },
            "blow": {  baseFrom: "blow", pastSimple: "blew", pastParticiple: "blown" },
            "break": {  baseFrom: "break", pastSimple: "broke", pastParticiple: "broken" },
            "breed": {  baseFrom: "breed", pastSimple: "bred", pastParticiple: "bred" },
            "bring": {  baseFrom: "bring", pastSimple: "brought", pastParticiple: "brought" },
            "broadcast": {  baseFrom: "broadcast", pastSimple: "broadcast/broadcasted", pastParticiple: "broadcast/broadcasted" },
            "build": {  baseFrom: "build", pastSimple: "built", pastParticiple: "built" },
            "burn": {  baseFrom: "burn", pastSimple: "burnt/burned", pastParticiple: "burnt/burned" },
            "burst": {  baseFrom: "burst", pastSimple: "burst", pastParticiple: "burst" },
            "bust": {  baseFrom: "bust", pastSimple: "bust", pastParticiple: "bust" },
            "buy": {  baseFrom: "buy", pastSimple: "bought", pastParticiple: "bought" },
            "cast": {  baseFrom: "cast", pastSimple: "cast", pastParticiple: "cast" },
            "catch": {  baseFrom: "catch", pastSimple: "caught", pastParticiple: "caught" },
            "choose": {  baseFrom: "choose", pastSimple: "chose", pastParticiple: "chosen" },
            "clap": {  baseFrom: "clap", pastSimple: "clapped/clapt", pastParticiple: "clapped/clapt" },
            "cling": {  baseFrom: "cling", pastSimple: "clung", pastParticiple: "clung" },
            "clothe": {  baseFrom: "clothe", pastSimple: "clad/clothed", pastParticiple: "clad/clothed" },
            "come": {  baseFrom: "come", pastSimple: "came", pastParticiple: "come" },
            "cost": {  baseFrom: "cost", pastSimple: "cost", pastParticiple: "cost" },
            "creep": {  baseFrom: "creep", pastSimple: "crept", pastParticiple: "crept" },
            "cut": {  baseFrom: "cut", pastSimple: "cut", pastParticiple: "cut" },
            "dare": {  baseFrom: "dare", pastSimple: "dared/durst", pastParticiple: "dared" },
            "deal": {  baseFrom: "deal", pastSimple: "dealt", pastParticiple: "dealt" },
            "dig": {  baseFrom: "dig", pastSimple: "dug", pastParticiple: "dug" },
            "dive": {  baseFrom: "dive", pastSimple: "dived/dove", pastParticiple: "dived" },
            "do": {  baseFrom: "do", pastSimple: "did", pastParticiple: "done" },
            "draw": {  baseFrom: "draw", pastSimple: "drew", pastParticiple: "drawn" },
            "dream": {  baseFrom: "dream", pastSimple: "dreamt/dreamed", pastParticiple: "dreamt/dreamed" },
            "drink": {  baseFrom: "drink", pastSimple: "drank", pastParticiple: "drunk" },
            "drive": {  baseFrom: "drive", pastSimple: "drove", pastParticiple: "driven" },
            "dwell": {  baseFrom: "dwell", pastSimple: "dwelt", pastParticiple: "dwelt" },
            "eat": {  baseFrom: "eat", pastSimple: "ate", pastParticiple: "eaten" },
            "fall": {  baseFrom: "fall", pastSimple: "fell", pastParticiple: "fallen" },
            "feed": {  baseFrom: "feed", pastSimple: "fed", pastParticiple: "fed" },
            "feel": {  baseFrom: "feel", pastSimple: "felt", pastParticiple: "felt" },
            "fight": {  baseFrom: "fight", pastSimple: "fought", pastParticiple: "fought" },
            "find": {  baseFrom: "find", pastSimple: "found", pastParticiple: "found" },
            "fit": {  baseFrom: "fit", pastSimple: "fit/fitted", pastParticiple: "fit/fitted" },
            "flee": {  baseFrom: "flee", pastSimple: "fled", pastParticiple: "fled" },
            "fling": {  baseFrom: "fling", pastSimple: "flung", pastParticiple: "flung" },
            "fly": {  baseFrom: "fly", pastSimple: "flew", pastParticiple: "flown" },
            "forbid": {  baseFrom: "forbid", pastSimple: "forbade/forbad", pastParticiple: "forbidden" },
            "forecast": {  baseFrom: "forecast", pastSimple: "forecast/forecasted", pastParticiple: "forecast/forecasted" },
            "foresee": {  baseFrom: "foresee", pastSimple: "foresaw", pastParticiple: "foreseen" },
            "foretell": {  baseFrom: "foretell", pastSimple: "foretold", pastParticiple: "foretold" },
            "forget": {  baseFrom: "forget", pastSimple: "forgot", pastParticiple: "forgotten" },
            "forgive": {  baseFrom: "forgive", pastSimple: "forgave", pastParticiple: "forgiven" },
            "forsake": {  baseFrom: "forsake", pastSimple: "forsook", pastParticiple: "forsaken" },
            "freeze": {  baseFrom: "freeze", pastSimple: "froze", pastParticiple: "frozen" },
            "frostbite": {  baseFrom: "frostbite", pastSimple: "frostbit", pastParticiple: "frostbitten" },
            "get": {  baseFrom: "get", pastSimple: "got", pastParticiple: "got/gotten" },
            "give": {  baseFrom: "give", pastSimple: "gave", pastParticiple: "given" },
            "go": {  baseFrom: "go", pastSimple: "went", pastParticiple: "gone/been" },
            "grind": {  baseFrom: "grind", pastSimple: "ground", pastParticiple: "ground" },
            "grow": {  baseFrom: "grow", pastSimple: "grew", pastParticiple: "grown" },
            "handwrite": {  baseFrom: "handwrite", pastSimple: "handwrote", pastParticiple: "handwritten" },
            "hang": {  baseFrom: "hang", pastSimple: "hung/hanged", pastParticiple: "hung/hanged" },
            "have": {  baseFrom: "have", pastSimple: "had", pastParticiple: "had" },
            "hear": {  baseFrom: "hear", pastSimple: "heard", pastParticiple: "heard" },
            "hide": {  baseFrom: "hide", pastSimple: "hid", pastParticiple: "hidden" },
            "hit": {  baseFrom: "hit", pastSimple: "hit", pastParticiple: "hit" },
            "hold": {  baseFrom: "hold", pastSimple: "held", pastParticiple: "held" },
            "hurt": {  baseFrom: "hurt", pastSimple: "hurt", pastParticiple: "hurt" },
            "inlay": {  baseFrom: "inlay", pastSimple: "inlaid", pastParticiple: "inlaid" },
            "input": {  baseFrom: "input", pastSimple: "input/inputted", pastParticiple: "input/inputted" },
            "interlay": {  baseFrom: "interlay", pastSimple: "interlaid", pastParticiple: "interlaid" },
            "keep": {  baseFrom: "keep", pastSimple: "kept", pastParticiple: "kept" },
            "kneel": {  baseFrom: "kneel", pastSimple: "knelt/kneeled", pastParticiple: "knelt/kneeled" },
            "knit": {  baseFrom: "knit", pastSimple: "knit/knitted", pastParticiple: "knit/knitted" },
            "know": {  baseFrom: "know", pastSimple: "knew", pastParticiple: "known" },
            "lay": {  baseFrom: "lay", pastSimple: "laid", pastParticiple: "laid" },
            "lead": {  baseFrom: "lead", pastSimple: "led", pastParticiple: "led" },
            "lean": {  baseFrom: "lean", pastSimple: "leant/leaned", pastParticiple: "leant/leaned" },
            "leap": {  baseFrom: "leap", pastSimple: "leapt/leaped", pastParticiple: "leapt/leaped" },
            "learn": {  baseFrom: "learn", pastSimple: "learnt/learned", pastParticiple: "learnt/learned" },
            "leave": {  baseFrom: "leave", pastSimple: "left", pastParticiple: "left" },
            "lend": {  baseFrom: "lend", pastSimple: "lent", pastParticiple: "lent" },
            "let": {  baseFrom: "let", pastSimple: "let", pastParticiple: "let" },
            "lie": {  baseFrom: "lie", pastSimple: "lay", pastParticiple: "lain" },
            "light": {  baseFrom: "light", pastSimple: "lit", pastParticiple: "lit" },
            "lose": {  baseFrom: "lose", pastSimple: "lost", pastParticiple: "lost" },
            "make": {  baseFrom: "make", pastSimple: "made", pastParticiple: "made" },
            "mean": {  baseFrom: "mean", pastSimple: "meant", pastParticiple: "meant" },
            "meet": {  baseFrom: "meet", pastSimple: "met", pastParticiple: "met" },
            "melt": {  baseFrom: "melt", pastSimple: "melted", pastParticiple: "molten/melted" },
            "mislead": {  baseFrom: "mislead", pastSimple: "misled", pastParticiple: "misled" },
            "mistake": {  baseFrom: "mistake", pastSimple: "mistook", pastParticiple: "mistaken" },
            "misunderstand": {  baseFrom: "misunderstand", pastSimple: "misunderstood", pastParticiple: "misunderstood" },
            "miswed": {  baseFrom: "miswed", pastSimple: "miswed/miswedded", pastParticiple: "miswed/miswedded" },
            "mow": {  baseFrom: "mow", pastSimple: "mowed", pastParticiple: "mown" },
            "overdraw": {  baseFrom: "overdraw", pastSimple: "overdrew", pastParticiple: "overdrawn" },
            "overhear": {  baseFrom: "overhear", pastSimple: "overheard", pastParticiple: "overheard" },
            "overtake": {  baseFrom: "overtake", pastSimple: "overtook", pastParticiple: "overtaken" },
            "pay": {  baseFrom: "pay", pastSimple: "paid", pastParticiple: "paid" },
            "preset": {  baseFrom: "preset", pastSimple: "preset", pastParticiple: "preset" },
            "prove": {  baseFrom: "prove", pastSimple: "proved", pastParticiple: "proven/Proved" },
            "put": {  baseFrom: "put", pastSimple: "put", pastParticiple: "put" },
            "quit": {  baseFrom: "quit", pastSimple: "quit", pastParticiple: "quit" },
            "re-prove": {  baseFrom: "re-prove", pastSimple: "re-proved", pastParticiple: "re-proven/re-proved" },
            "read": {  baseFrom: "read", pastSimple: "read", pastParticiple: "read" },
            "rid": {  baseFrom: "rid", pastSimple: "rid/ridded", pastParticiple: "rid/ridded" },
            "ride": {  baseFrom: "ride", pastSimple: "rode", pastParticiple: "ridden" },
            "ring": {  baseFrom: "ring", pastSimple: "rang", pastParticiple: "rung" },
            "rise": {  baseFrom: "rise", pastSimple: "rose", pastParticiple: "risen" },
            "rive": {  baseFrom: "rive", pastSimple: "rived", pastParticiple: "riven/rived" },
            "run": {  baseFrom: "run", pastSimple: "ran", pastParticiple: "run" },
            "saw": {  baseFrom: "saw", pastSimple: "sawed", pastParticiple: "sawn/sawed" },
            "say": {  baseFrom: "say", pastSimple: "said", pastParticiple: "said" },
            "see": {  baseFrom: "see", pastSimple: "saw", pastParticiple: "seen" },
            "seek": {  baseFrom: "seek", pastSimple: "sought", pastParticiple: "sought" },
            "sell": {  baseFrom: "sell", pastSimple: "sold", pastParticiple: "sold" },
            "send": {  baseFrom: "send", pastSimple: "sent", pastParticiple: "sent" },
            "set": {  baseFrom: "set", pastSimple: "set", pastParticiple: "set" },
            "sew": {  baseFrom: "sew", pastSimple: "sewed", pastParticiple: "sewn/sewed" },
            "shake": {  baseFrom: "shake", pastSimple: "shook", pastParticiple: "shaken" },
            "shave": {  baseFrom: "shave", pastSimple: "shaved", pastParticiple: "shaven/shaved" },
            "shear": {  baseFrom: "shear", pastSimple: "shore/sheared", pastParticiple: "shorn/sheared" },
            "shed": {  baseFrom: "shed", pastSimple: "shed", pastParticiple: "shed" },
            "shine": {  baseFrom: "shine", pastSimple: "shone", pastParticiple: "shone" },
            "shoe": {  baseFrom: "shoe", pastSimple: "shod", pastParticiple: "shod" },
            "shoot": {  baseFrom: "shoot", pastSimple: "shot", pastParticiple: "shot" },
            "show": {  baseFrom: "show", pastSimple: "showed", pastParticiple: "shown" },
            "shrink": {  baseFrom: "shrink", pastSimple: "shrank", pastParticiple: "shrunk" },
            "shut": {  baseFrom: "shut", pastSimple: "shut", pastParticiple: "shut" },
            "sing": {  baseFrom: "sing", pastSimple: "sang", pastParticiple: "sung" },
            "sink": {  baseFrom: "sink", pastSimple: "sank", pastParticiple: "sunk" },
            "sit": {  baseFrom: "sit", pastSimple: "sat", pastParticiple: "sat" },
            "slay": {  baseFrom: "slay", pastSimple: "slew", pastParticiple: "slain" },
            "sleep": {  baseFrom: "sleep", pastSimple: "slept", pastParticiple: "slept" },
            "slide": {  baseFrom: "slide", pastSimple: "slid", pastParticiple: "slid/slidden" },
            "sling": {  baseFrom: "sling", pastSimple: "slung", pastParticiple: "slung" },
            "slink": {  baseFrom: "slink", pastSimple: "slunk", pastParticiple: "slunk" },
            "slit": {  baseFrom: "slit", pastSimple: "slit", pastParticiple: "slit" },
            "smell": {  baseFrom: "smell", pastSimple: "smelt/smelled", pastParticiple: "smelt/smelled" },
            "sneak": {  baseFrom: "sneak", pastSimple: "sneaked/snuck", pastParticiple: "sneaked/snuck" },
            "soothsay": {  baseFrom: "soothsay", pastSimple: "soothsaid", pastParticiple: "soothsaid" },
            "sow": {  baseFrom: "sow", pastSimple: "sowed", pastParticiple: "sown" },
            "speak": {  baseFrom: "speak", pastSimple: "spoke", pastParticiple: "spoken" },
            "speed": {  baseFrom: "speed", pastSimple: "sped/speeded", pastParticiple: "sped/speeded" },
            "spell": {  baseFrom: "spell", pastSimple: "spelt/spelled", pastParticiple: "spelt/spelled" },
            "spend": {  baseFrom: "spend", pastSimple: "spent", pastParticiple: "spent" },
            "spill": {  baseFrom: "spill", pastSimple: "spilt/spilled", pastParticiple: "spilt/spilled" },
            "spin": {  baseFrom: "spin", pastSimple: "span/spun", pastParticiple: "spun" },
            "spit": {  baseFrom: "spit", pastSimple: "spat/spit", pastParticiple: "spat/spit" },
            "split": {  baseFrom: "split", pastSimple: "split", pastParticiple: "split" },
            "spoil": {  baseFrom: "spoil", pastSimple: "spoilt/spoiled", pastParticiple: "spoilt/spoiled" },
            "spread": {  baseFrom: "spread", pastSimple: "spread", pastParticiple: "spread" },
            "spring": {  baseFrom: "spring", pastSimple: "sprang", pastParticiple: "sprung" },
            "stand": {  baseFrom: "stand", pastSimple: "stood", pastParticiple: "stood" },
            "steal": {  baseFrom: "steal", pastSimple: "stole", pastParticiple: "stolen" },
            "stick": {  baseFrom: "stick", pastSimple: "stuck", pastParticiple: "stuck" },
            "sting": {  baseFrom: "sting", pastSimple: "stung", pastParticiple: "stung" },
            "stink": {  baseFrom: "stink", pastSimple: "stank", pastParticiple: "stunk" },
            "stride": {  baseFrom: "stride", pastSimple: "strode/strided", pastParticiple: "stridden" },
            "strike": {  baseFrom: "strike", pastSimple: "struck", pastParticiple: "struck/stricken" },
            "string": {  baseFrom: "string", pastSimple: "strung", pastParticiple: "strung" },
            "strip": {  baseFrom: "strip", pastSimple: "stript/stripped", pastParticiple: "stript/stripped" },
            "strive": {  baseFrom: "strive", pastSimple: "strove", pastParticiple: "striven" },
            "sublet": {  baseFrom: "sublet", pastSimple: "sublet", pastParticiple: "sublet" },
            "sunburn": {  baseFrom: "sunburn", pastSimple: "sunburned/sunburnt", pastParticiple: "sunburned/sunburnt" },
            "swear": {  baseFrom: "swear", pastSimple: "swore", pastParticiple: "sworn" },
            "sweat": {  baseFrom: "sweat", pastSimple: "sweat/sweated", pastParticiple: "sweat/sweated" },
            "sweep": {  baseFrom: "sweep", pastSimple: "swept/sweeped", pastParticiple: "swept/sweeped" },
            "swell": {  baseFrom: "swell", pastSimple: "swelled", pastParticiple: "swollen" },
            "swim": {  baseFrom: "swim", pastSimple: "swam", pastParticiple: "swum" },
            "swing": {  baseFrom: "swing", pastSimple: "swung", pastParticiple: "swung" },
            "take": {  baseFrom: "take", pastSimple: "took", pastParticiple: "taken" },
            "teach": {  baseFrom: "teach", pastSimple: "taught", pastParticiple: "taught" },
            "tear": {  baseFrom: "tear", pastSimple: "tore", pastParticiple: "torn" },
            "tell": {  baseFrom: "tell", pastSimple: "told", pastParticiple: "told" },
            "think": {  baseFrom: "think", pastSimple: "thought", pastParticiple: "thought" },
            "thrive": {  baseFrom: "thrive", pastSimple: "throve/thrived", pastParticiple: "thriven/thrived" },
            "throw": {  baseFrom: "throw", pastSimple: "threw", pastParticiple: "thrown" },
            "thrust": {  baseFrom: "thrust", pastSimple: "thrust", pastParticiple: "thrust" },
            "tread": {  baseFrom: "tread", pastSimple: "trod", pastParticiple: "trodden" },
            "undergo": {  baseFrom: "undergo", pastSimple: "underwent", pastParticiple: "undergone" },
            "understand": {  baseFrom: "understand", pastSimple: "understood", pastParticiple: "understood" },
            "undertake": {  baseFrom: "undertake", pastSimple: "undertook", pastParticiple: "undertaken" },
            "upsell": {  baseFrom: "upsell", pastSimple: "upsold", pastParticiple: "upsold" },
            "upset": {  baseFrom: "upset", pastSimple: "upset", pastParticiple: "upset" },
            "vex": {  baseFrom: "vex", pastSimple: "vext/vexed", pastParticiple: "vext/vexed" },
            "wake": {  baseFrom: "wake", pastSimple: "woke", pastParticiple: "woken" },
            "wear": {  baseFrom: "wear", pastSimple: "wore", pastParticiple: "worn" },
            "weave": {  baseFrom: "weave", pastSimple: "wove", pastParticiple: "woven" },
            "wed": {  baseFrom: "wed", pastSimple: "wed/wedded", pastParticiple: "wed/wedded" },
            "weep": {  baseFrom: "weep", pastSimple: "wept", pastParticiple: "wept" },
            "wend": {  baseFrom: "wend", pastSimple: "wended/went", pastParticiple: "wended/went" },
            "wet": {  baseFrom: "wet", pastSimple: "wet/wetted", pastParticiple: "wet/wetted" },
            "win": {  baseFrom: "win", pastSimple: "won", pastParticiple: "won" },
            "wind": {  baseFrom: "wind", pastSimple: "wound", pastParticiple: "wound" },
            "withdraw": {  baseFrom: "withdraw", pastSimple: "withdrew", pastParticiple: "withdrawn" },
            "withhold": {  baseFrom: "withhold", pastSimple: "withheld", pastParticiple: "withheld" },
            "withstand": {  baseFrom: "withstand", pastSimple: "withstood", pastParticiple: "withstood" },
            "wring": {  baseFrom: "wring", pastSimple: "wrung", pastParticiple: "wrung" },
            "write": {  baseFrom: "write", pastSimple: "wrote", pastParticiple: "written" },
            "zinc": {  baseFrom: "zinc", pastSimple: "zinced/zincked", pastParticiple: "zinced/zincked" }
        };

        function isIrregular ( verb ) {
            if ( irregularVerbs[verb] ) {
                return true;
            } else {
                return false;
            }
        }

        function isVowel ( c ) {
            var vowelLetters = "aeiou";
            return vowelLetters.indexOf( c ) > -1;
        }

        function isConsonant ( c ) {
            return !isVowel( c );
        }

        function getIrregularVerbByTense ( t1, vreb ) {
            return verb;
        }

        function getPerfectIrregularVerb ( verb ) {
            return verb;
        }

        function getEdFromOfVerb ( verb ) {
            if( isIrregular ( verb ) ) {
                return irregularVerbs[verb].pastSimple;
            } else if (verb.endsWith( "e" ) ) {
                return verb + "d";
            } else if ( verb.endsWith( "y" ) ) {
                if ( isVowel( verb.substr( -2, 1 ) ) ) {
                    return verb + "ed";
                } else {
                    return verb.substring( 0, verb.length - 1 ) + "ied";
                }
            } else if ( isConsonant( verb.substr( -3, 1 ) ) && isVowel( verb.substr( -2, 1 ) ) && isConsonant( verb.substr( -1, 1 ) ) ) {
                if ( verb.endsWith( "x" ) || verb.endsWith( "w" ) || verb.endsWith( "v" ) || verb.endsWith( "y" ) ) {
                    return verb + "ed";
                } else {
                    return verb + verb.substr( -1, 1 ) + "ed";
                }
                
            } else {
                return verb + "ed";
            }
        }

        function getIngFormOfVerb ( verb ) {
            if ( verb.endsWith( "ie" ) ) {
                return verb.substring( 0, verb.length - 2 ) + "ying";
            } else if  ( verb.endsWith( "ee" ) ) {
                return verb + "ing";
            } else if ( verb.endsWith( "e" ) ) {
                return verb.substring( 0, verb.length - 1 ) + "ing";
            } else if ( isConsonant( verb.substr( -3, 1 ) ) && isVowel( verb.substr( -2, 1 ) ) && isConsonant( verb.substr( -1, 1 ) ) ) {
                if ( verb.endsWith( "x" ) || verb.endsWith( "w" ) || verb.endsWith( "y" ) ) {
                    return verb + "ing";
                } else {
                    return verb + verb.substr( -1, 1 ) + "ing";
                }
            } else {
                return verb + "ing";
            }
        }

        function getVerbByTense ( t1, t2, voice, verb ) {
            var verb = verb.toLowerCase();

            if ( voice === "PASSIVE" ) {
                if( isIrregular ( verb ) ) {
                    return irregularVerbs[verb].pastParticiple;
                } else {
                    return getEdFromOfVerb( verb );
                }
            } else if ( voice === "ACTIVE" ) {
                if ( t2 === "SIMPLE" ) {
                    if ( t1 === "PAST" ) {
                        console.log("PAST SIMPLE");
                        return getEdFromOfVerb( verb );
                        
                    } else if ( t1 === "PRESENT" || t1 === "FUTURE" ) {
                        return verb;
                    }
                } else if ( t2 === "CONTINUOUS" ) {
                    if ( t1 === "PAST" || t1 === "PRESENT" || t1 === "FUTURE" ) {
                        console.log("* CONTINUOUS");
                        return getIngFormOfVerb( verb );
                    }

                } else if ( t2 === "PERFECT" ) {
                    console.log("* PERFECT");
                    if( isIrregular ( verb ) ) {
                        return irregularVerbs[verb].pastParticiple;
                    } else {
                        return getEdFromOfVerb( verb );
                    }
                } else if ( t2 === "PERFECTCONTINUOUS" ) {
                    console.log("* PERFECT CONTINUOUS");
                    return getIngFormOfVerb( verb );
                }
            }
        }

        $scope.getPictureByVerb = function ( verb ) {
            var verb = verb.toLowerCase();
            return verbInPictures[verb];
        }

        $scope.originalVerb = "pack";

        $scope.getVerbByTense = function ( t1, t2, voice, verb ) {
            return getVerbByTense( t1, t2, voice, verb );
        }
}]);
