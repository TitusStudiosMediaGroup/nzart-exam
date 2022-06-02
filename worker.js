const dataset = {
    "sections" : [
        {
            "sectiontitle" : "Regulations",
            "sectionquestions" : [
                {
                    "questiontitle" : "An amateur radio operator must be able to",
                    "options" : [
                        "converse in the languages shown on the Certificate of Competency",
                        "read Morse code at 12 words-per-minute",
                        "monitor standard frequency transmissions",
                        "verify that transmissions are within an authorised frequency band"
                    ],
                    "correctanswer" : 1
                },
                {
                    "questiontitle" : "A General Amateur Operator Certificate of Competency authorises the use of",
                    "options" : [
                        "all amateur radio transmitting and receiving apparatus",
                        "a TV receiver",
                        "amateur radio transmitting apparatus only",
                        "marine mobile equipment"
                    ],
                    "correctanswer" : 3
                }
            ]
        }
    ]
}

const template = {
    "template-section" : {
        "type" : "element",
        "tag" : "div",
        "return" : "true",
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
                "value" : "true"
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
                                "value" : "true"
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
                                "value" : "true"
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
        "root" : "true"
    },
    "template-questionfield" : {
        "type" : "element",
        "tag" : "form",
        "return" : "true",
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
                "value" : "true"
            }
        ],
        "content" : [],
        "root" : "true"
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
                        "value" : "true"
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
                "return" : "true",
                "attributes" : [
                    {
                        "name" : "class",
                        "value" : "form-answerfield"
                    }
                ],
                "content" : []
            }
        ],
        "root" : "true"
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
                        "value" : "true"
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
                        "value" : "true"
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
        "root" : "true"
    }
}

const solutions = dataset//JSON.parse(dataset);
const templates = template//JSON.parse(template);

let ParentTable = [];
let ElementTable = [];

function createElement(item,index,arr,parent,qid){
    switch(item.type){
        case "element":
            let Element = document.createElement(item.tag);
            parent.append(Element);
            parent = Element;

            if(typeof item.content[0] !== "undefined"){
                switch(item.content[0].type){
                    case "text":
                        if(ParentTable.length > 0) parent = ParentTable.pop();
                        console.log(item.content[0].value)
                        Element.innerHTML = item.content[0].value;
                        break;
                    default:
                        if(item.content.length > 0) ParentTable.push(Element);
                }

                if(item.content.length == 0 && ParentTable.length > 0) parent = ParentTable.pop();
            }

            function applyAttributes(item2,index2,arr2,quid){
                Element.setAttribute(item2.name,item2.value);

                if(item2.name == "allowuniqueid" && item2.value == "true"){
                    Element.setAttribute("id",Element.getAttribute("id") + quid);
                }
            }

            item.attributes.forEach(item => applyAttributes(item,index,arr,qid));
            item.content.forEach(item => createElement(item,index,arr,parent,qid));

            if(item.return == "true") ElementTable.push(Element);
        break;
        case "text":
            return;
        default:
            item.content.forEach(item => createElement(item,index,arr,parent,qid));
    }

    if(item.root == "true") return ElementTable.pop();
}

function createSection(item){ //kinda ugly but it works.
    let Parent = document.getElementById("generate");
    let section_ident = ('_' + Math.random().toString(36).substr(2,9));
    let section = createElement(templates["template-section"],undefined,undefined,Parent,section_ident);
    let SectionTitle = document.getElementById("sectiontitle" + section_ident);
    let SectionTotal = document.getElementById("sectiontotal" + section_ident);

    SectionTitle.innerHTML = item[1].sectiontitle;
    SectionTotal.innerHTML = item[1].sectionquestions.length > 1 ? "("+item[1].sectionquestions.length+" questions)" : "("+item[1].sectionquestions.length+" question)";
    
    function createQuestions(item2,index,arr,form,formid,answer){
        let question_ident = ('_' + Math.random().toString(36).substr(2,9));
        let questions = createElement(templates["template-radioinputs"],undefined,undefined,form,question_ident);
        let QuestionLabel = document.getElementById("questionlabel" + question_ident);
        let QuestionInput = document.getElementById("questioninput" + question_ident);

        QuestionLabel.innerHTML = item2;
        QuestionLabel.setAttribute("name",QuestionLabel.getAttribute("name") + formid);
        QuestionInput.setAttribute("name",QuestionInput.getAttribute("name") + formid);

        if((index + 1) == answer) QuestionInput.setAttribute("answer","true");
    }

    function createField(item3,index3,arr3){
        let formid = ('_' + Math.random().toString(36).substr(2,9));
        let field = createElement(templates["template-questionfield"],undefined,undefined,section,formid);
        let form = createElement(templates["template-answerfield"],undefined,undefined,field,section_ident);
        let QuestionTitle = document.getElementById("question" + section_ident);
        let CorrectAnswer = item3.correctanswer;

        QuestionTitle.innerHTML = item3.questiontitle;
        item3.options.forEach((item,index,arr) => createQuestions(item,index,arr,form,formid,CorrectAnswer));
    }

    item[1].sectionquestions.forEach((item,index,arr) => createField(item,index,arr));
}

function SubmitField(input){
    let field = document.getElementById("field" + input.getAttribute("name"));
    if(field.getAttribute("class").includes("form-answer-correct") || field.getAttribute("class").includes("form-answer-incorrect")) return;

    switch(input.getAttribute("answer")){
        case "true":
            field.setAttribute("class",field.getAttribute("class") + " form-answer-correct");
        break;
        default:
            field.setAttribute("class",field.getAttribute("class") + " form-answer-incorrect");
    }
}

Object.entries(solutions.sections).forEach(createSection);
