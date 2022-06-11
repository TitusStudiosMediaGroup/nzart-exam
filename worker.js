const dataset = {
    "sections" : [
        {
            "sectiontitle" : "Regulations",
            "sectionquestions" : [
                {
                    "questiontitle" : "The Amateur Service may be briefly defined as:",
                    "options" : [
                        "a private radio service for personal gain and public benefit",
                        "a public radio service used for public service communications",
                        "a radiocommunication service for the purpose of self-training, intercommunication and technical investigation",
                        "a private radio service intended only for emergency communications"
                    ],
                    "correctanswer" : 3
                },
                {
                    "questiontitle" : "The organisation responsible for the International Radio Regulations is the:",
                    "options" : [
                        "European Radiocommunications Office",
                        "United Nations",
                        "International Telecommunication Union",
                        "European Telecommunication Standards Institute"
                    ],
                    "correctanswer" : 3
                },
                {
                    "questiontitle" : "New Zealand's views on international radio regulatory matters are coordinated by the:",
                    "options" : [
                        "New Zealand Association of Radio Transmitters (NZART)",
                        "Ministry of Business, Innovation and Employment (MBIE)",
                        "International Amateur Radio Union (IARU)",
                        "Prime Minister's Office"
                    ],
                    "correctanswer" : 2
                },
                {
                    "questiontitle" : "For regulatory purposes the world is divided into regions each with different radio spectrum allocations. New Zealand is in:",
                    "options" : [
                        "Region 1",
                        "Region 2",
                        "Region 3",
                        "Region 4"
                    ],
                    "correctanswer" : 3
                },
                {
                    "questiontitle" : "The prime document for the administration of the Amateur Service in New Zealand is the:",
                    "options" : [
                        "New Zealand Radiocommunications Regulations",
                        "Broadcasting Act",
                        "Radio Amateur's Handbook",
                        "minutes of the International Telecommunication Union meetings"
                    ],
                    "correctanswer" : 1
                },
                {
                    "questiontitle" : "The administration of the Amateur Service in New Zealand is by:",
                    "options" : [
                        "the Ministry of Business Innovation and Employment Radio Spectrum Management Group",
                        "the Area Code administrators of New Zealand Post",
                        "the Radio Communications Division of the Ministry of Police",
                        "your local council public relations section"
                    ],
                    "correctanswer" : 1
                },
                {
                    "questiontitle" : "An Amateur Station is a station:",
                    "options" : [
                        "in the public radio service",
                        "using radiocommunications for a commercial purpose",
                        "using equipment for training new radiocommunications operators",
                        "in the Amateur Service"
                    ],
                    "correctanswer" : 4
                },
                {
                    "questiontitle" : "A General Amateur Operator's Certificate of Competency can be inspected by an authorised officer from the Ministry of Business, Innovation and Employment:",
                    "options" : [
                        "at any time",
                        "on any business day",
                        "before 9 p.m.",
                        "only on public holidays"
                    ],
                    "correctanswer" : 1
                },
                {
                    "questiontitle" : "The fundamental regulations controlling the Amateur Service are to be found in:",
                    "options" : [
                        "the International Radio Regulations from the ITU",
                        "the Radio Amateur's Handbook",
                        "the NZART Callbook",
                        "on the packet radio bulletin-board"
                    ],
                    "correctanswer" : 1
                },
                {
                    "questiontitle" : "You must have a General Amateur Operator's Certificate of Competency to:",
                    "options" : [
                        "transmit on public-service frequencies",
                        "retransmit shortwave broadcasts",
                        "repair radio equipment",
                        "transmit in bands allocated to the Amateur Service"
                    ],
                    "correctanswer" : 4
                },
                {
                    "questiontitle" : "A New Zealand General Amateur Operator's Certificate of Competency allows you to operate:",
                    "options" : [
                        "anywhere in the world",
                        "anywhere in New Zealand and in any other country that recognises the Certificate",
                        "within 50 km of your home station location",
                        "only at your home address"
                    ],
                    "correctanswer" : 2
                },
                {
                    "questiontitle" : "With a General Amateur Operator's Certificate of Competency you may operate transmitters in your station:",
                    "options" : [
                        "one at a time",
                        "one at a time, except for emergency communications",
                        "any number at one time",
                        "any number, so long as they are transmitting on different bands"
                    ],
                    "correctanswer" : 3
                },
                {
                    "questiontitle" : "You must keep the following document at your amateur station:",
                    "options" : [
                        "your General Amateur Operator's Certificate of Competency",
                        "a copy of the Rules and Regulations for the Amateur Service",
                        "a copy of the Radio Amateur's Handbook for instant reference",
                        "a chart showing the amateur radio bands"
                    ],
                    "correctanswer" : 1
                }
            ]
        }
    ]
}

const template = {
    "template-section" : {
        "type" : "element",
        "tag" : "div",
        "return" : true,
        "attributes" : [
            {
                "name" : "class",
                "value" : "form-section"
            },
            {
                "name" : "id",
                "value" : "section"
            },
            {
                "name" : "allowuniqueid",
                "value" : true
            }
        ],
        "content" : [
            {
                "type" : "element",
                "tag" : "div",
                "attributes" : [
                    {
                        "name" : "class",
                        "value" : "form-sectioninfo"
                    }
                ],
                "content" : [
                    {
                        "type" : "element",
                        "tag" : "h1",
                        "attributes" : [
                            {
                                "name" : "id",
                                "value" : "sectiontitle"
                            },
                            {
                                "name" : "allowuniqueid",
                                "value" : true
                            }
                        ],
                        "content" : [
                            {
                                "type" : "text",
                                "value" : "Regulations"
                            }
                        ]
                    },
                    {
                        "type" : "element",
                        "tag" : "p",
                        "attributes" : [
                            {
                                "name" : "id",
                                "value" : "sectiontotal"
                            },
                            {
                                "name" : "allowuniqueid",
                                "value" : true
                            }
                        ],
                        "content" : [
                            {
                                "type" : "text",
                                "value" : "(7 questions)"
                            }
                        ]
                    }
                ]
            }
        ],
        "root" : true
    },
    "template-questionfield" : {
        "type" : "element",
        "tag" : "form",
        "return" : true,
        "attributes" : [
            {
                "name" : "class",
                "value" : "form-questionfield"
            },
            {
                "name" : "id",
                "value" : "field"
            },
            {
                "name" : "allowuniqueid",
                "value" : true
            }
        ],
        "content" : [],
        "root" : true
    },
    "template-answerfield" : {
        "content" : [
            {
                "type" : "element",
                "tag" : "h1",
                "attributes" : [
                    {
                        "name" : "id",
                        "value" : "question"
                    },
                    {
                        "name" : "allowuniqueid",
                        "value" : true
                    }
                ],
                "content" : [
                    {
                        "type" : "text",
                        "value" : "An amateur radio operator must be able to:"
                    }
                ]
            },
            {
                "type" : "element",
                "tag" : "div",
                "return" : true,
                "attributes" : [
                    {
                        "name" : "class",
                        "value" : "form-answerfield"
                    }
                ],
                "content" : []
            }
        ],
        "root" : true
    },
    "template-radioinputs" : {
        "content" : [
            {
                "type" : "element",
                "tag" : "input",
                "attributes" : [
                    {
                        "name" : "type",
                        "value" : "radio"
                    },
                    {
                        "name" : "name",
                        "value" : ""
                    },
                    {
                        "name" : "value",
                        "value" : "1"
                    },
                    {
                        "name" : "id",
                        "value" : "questioninput"
                    },
                    {
                        "name" : "onclick",
                        "value" : "SubmitField(this);"
                    },
                    {
                        "name" : "allowuniqueid",
                        "value" : true
                    }
                ],
                "content" : []
            },
            {
                "type" : "element",
                "tag" : "label",
                "attributes" : [
                    {
                        "name" : "for",
                        "value" : "1"
                    },
                    {
                        "name" : "id",
                        "value" : "questionlabel"
                    },
                    {
                        "name" : "allowuniqueid",
                        "value" : true
                    }
                ],
                "content" : [
                    {
                        "type" : "text",
                        "value" : "read Morse code at 12 words-per-minute"
                    }
                ]
            }
        ],
        "root" : true
    }
}

/*
question database: https://www.nzart.org.nz/assets/learn/exam/NZART-Question-Bank-With-Answers-062018-1.pdf
todo:
    - add browser varibles for choosing exam settings
    - settings:
        - all 600 questions
        - 2 hour limit (shows timer)
        - real time grading
        - light/dark mode?
        - export report?
    - homepage aerofur.nz/nzart
        - will have exam information and resources (such as the 40/60 pass rate)
    - publish to aerofur.nz/nzart/exam
        - will redirect you to /exam for exam tester
        - maybe redirect to /results for exam results (if storing in database)?
    - add "next steps" when you pass the exam
    - remove test section from html
*/

const solutions = dataset//JSON.parse(dataset);
const templates = template//JSON.parse(template);

let ParentTable = [];
let ElementTable = [];

function createElement(item,Parent,uid)
{
    if(item.type == "element")
    {
        let Element = document.createElement(item.tag);
        Parent.append(Element);
        Parent = Element;

        if(typeof item.content[0] !== "undefined")
        {
            if(item.content[0].type == "text")
            {
                if(ParentTable.length > 0)
                {
                    Parent = ParentTable.pop();
                }

                Element.innerHTML = item.content[0].value;
            }
            else
            {
                if(item.content.length > 0) ParentTable.push(Element);
            }

            if(item.content.length == 0 && ParentTable.length > 0)
            {
                Parent = ParentTable.pop();
            }
        }

        function applyAttributes(attribute,id)
        {
            Element.setAttribute(attribute.name,attribute.value);

            if(attribute.name == "allowuniqueid" && attribute.value == true)
            {
                Element.setAttribute("id",Element.getAttribute("id") + id);
            }
            else if(attribute.name == "class")
            {
                Element.className = attribute.value;
            }
        }

        item.attributes.forEach(item => applyAttributes(item,uid));
        item.content.forEach(item => createElement(item,Parent,uid));

        if(item.return == true)
        {
            ElementTable.push(Element);
        }
    }
    else if(item.type != "text")
    {
        item.content.forEach(item => createElement(item,Parent,uid));
    }

    if(item.root == true)
    {
        return ElementTable.pop();
    }
}

function createID(prefix)
{
    if(typeof prefix !== "undefined")
    {
        return (prefix + '_' + (performance.now().toString(36) + Math.random().toString(36)).replace(/\./g,""));
    }
    else
    {
        return ('_' + (performance.now().toString(36) + Math.random().toString(36)).replace(/\./g,""));
    }
}

function createSection(item) //kinda ugly but it works.
{
    let Parent = document.getElementById("generate");
    let section_ident = createID();
    let section = createElement(templates["template-section"],Parent,section_ident);
    let SectionTitle = document.getElementById("sectiontitle" + section_ident);
    let SectionTotal = document.getElementById("sectiontotal" + section_ident);

    SectionTitle.innerHTML = item[1].sectiontitle;
    SectionTotal.innerHTML = item[1].sectionquestions.length > 1 ? "("+item[1].sectionquestions.length+" questions)" : "("+item[1].sectionquestions.length+" question)";
    
    function createQuestions(section_item,index,form,formid,answer)
    {
        let question_ident = createID();
        let questions = createElement(templates["template-radioinputs"],form,question_ident);
        let QuestionLabel = document.getElementById("questionlabel" + question_ident);
        let QuestionInput = document.getElementById("questioninput" + question_ident);

        QuestionLabel.innerHTML = section_item;
        QuestionLabel.setAttribute("name",QuestionLabel.getAttribute("name") + formid);
        QuestionInput.setAttribute("name",QuestionInput.getAttribute("name") + formid);

        if((index + 1) == answer)
        {
            QuestionInput.setAttribute("answer",true);
        }
    }

    function createField(question_item,ident,sectionfield)
    {
        let formid = createID();
        let questionID = createID();
        let field = createElement(templates["template-questionfield"],sectionfield,formid);
        let form = createElement(templates["template-answerfield"],field,questionID);
        let QuestionTitle = document.getElementById("question" + questionID);
        let CorrectAnswer = question_item.correctanswer;

        QuestionTitle.innerHTML = question_item.questiontitle;
        question_item.options.forEach((item,index) => createQuestions(item,index,form,formid,CorrectAnswer));
    }

    item[1].sectionquestions.forEach(item => createField(item,section_ident,section));
}

function SubmitField(input)
{
    let field = document.getElementById("field" + input.getAttribute("name"));

    if(field.getAttribute("class").includes("form-answer-correct") || field.getAttribute("class").includes("form-answer-incorrect"))
    {
        return;
    }

    if(input.getAttribute("answer") == "true")
    {
        field.setAttribute("class",field.getAttribute("class") + " form-answer-correct");
    }
    else
    {
        field.setAttribute("class",field.getAttribute("class") + " form-answer-incorrect");
    }
}

Object.entries(solutions.sections).forEach(createSection);
