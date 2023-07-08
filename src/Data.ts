interface IPost{
    post_name:string,
    post_content:Array<string>,
    url:string,
}


const PostMap:Map<string, Array<IPost>> = new Map()

PostMap.set("facilities",
    [
        {
            post_name:"X-Ray Centre (High frequency X-ray with CareStream computerised radiography)",
            post_content:[],
            url:"x-ray"
        },
        {
            post_name:"Ultrasound",
            post_content:[],
            url:"ultrasound"
        },
        {
            post_name:"Physiotherapy Centre (with Sports Rehabilitation)",
            post_content:[],
            url:"physiotherapy"
        },
        {
            post_name:"24x7 In-House Pharmacy",
            post_content:[],
            url:"pharmacy"
        },
        {
            post_name:"Pathology collection centre in collaboration with Global Diagnostics, a channel partner of Lal Path Labs, New Delhi",
            post_content:[],
            url:"pathology"
        }
    ]
)
PostMap.set("infra",
    [
        {
            post_name:"State of the art Operation Theatre (OT) with active infection control program",
            post_content:[],
            url:"operating%20theatre"
        },
        {
            post_name:"Intensive care and life support",
            post_content:[],
            url:"intensive%20care%20and%20life%20support"
        },
        {
            post_name:"Central Sterilisation Services through State of the Art Autoclaves",
            post_content:[],
            url:"central%20sterilisation%20services"
        },
        {
            post_name:"Air-conditioned Patient Waiting Room",
            post_content:[],
            url:"air-conditioned%20waiting%20room"
        },
        {
            post_name:"Suite Rooms and Single AC Rooms",
            post_content:[],
            url:"suite%20rooms%20and%20single%20ac%20rooms"
        },
        {
            post_name:"Queue management software for optimising wait time in OPDs",
            post_content:[],
            url:"queue%20management%20software"
        }
    ]
)
PostMap.set("gynae",
    [
        {
            post_name:"Normal Delivery",
            post_content:[],
            url:"normal%20delivery"
        },
        {
            post_name:"Emergency and Elective Caesarean Section",
            post_content:[],
            url:"emergency%20and%20elective%20caesarean%20section"
        },
        {
            post_name:"Hysteroscopy",
            post_content:[],
            url:"hysteroscopy"
        },
        {
            post_name:"Laparoscopic Tubal Ligation",
            post_content:[],
            url:"laparoscopic"
        },
        {
            post_name:"Hysterectomy/ Laparotomy",
            post_content:[],
            url:"hysterectomy%20or%20%20laparotomy"
        },
        {
            post_name:"Assisted Reproduction",
            post_content:[],
            url:"assisted%20reproduction"
        }
    ]
)

PostMap.set("ortho",
    [
        {
            post_name:"Total Hip and Knee Replacement",
            post_content:[
                "Vardaan offers best hip and knee replacement in Gaya. We arrange best products from India, and we also ensure a quick recovery (called rehabilitation). Our patients start walking on their feet within 2 days of the surgery. Today, let us help you in understanding the hip and knee replacement.",
                "In a total hip replacement (also called total hip arthroplasty), the damaged bone and cartilage is removed and replaced with prosthetic components. The damaged femoral head is removed and replaced with a metal stem that is placed into the hollow centre of the femur.",
                "Similarly in total knee replacement, also known as knee arthroplasty, the weight-bearing surfaces of the knee joint are replaced to relieve pain and disability. It is most commonly performed for osteoarthritis, and also for other knee diseases such as rheumatoid arthritis and psoriatic arthritis.",
                "Knee replacement surgery can be performed as a partial or a total knee replacement. In general, the surgery consists of replacing the diseased or damaged joint surfaces of the knee with metal and plastic components shaped to allow continued motion of the knee. The best orthopaedic surgery in Gaya is offered in Vardaan where accurate alignment is our focus. Knee feels as new, without any pain and the patient is up on his/her feet within two days."
            ],
            url:"total%20hip%20and%20knee%20replacement"
        },
        {
            post_name:"Arthroscopy & Sports Surgery",
            post_content:[
                "Vardaan provides timely and accurate diagnosis of all sports related injuries. It also provides best arthroscopy in Gaya. Sports are very important for overall well-being of a person, especially in the young age. Sons and daughters of Gaya have represented the state and country in various sports. However, the sports also sometimes causes sprains and other injuries. Vardaan Gaya addresses to these sports injuries on priority to ensure you are up and running (literally) in no time!",
                "Sports injuries itself is a broader term. Sports injuries are commonly caused by overuse, direct impact, or the application of force that is greater than the body part can structurally withstand. Common injuries include bruises, sprains, strains, joint injuries and nose bleeds. As you can guess, not all sports injuries are from playing sports!",
                "Sports injury in young children may cause lifelong deformities and scars if not treated timely"
            ],
            url:"arthrosocopy"
        },
        {
            post_name:"Spine and backache Surgery",
            post_content:[
                "Back is one of the most important muscle group in our body. Spine not only helps us in standing erect, but is also houses central nervous system important for our motor skills like walking. Sadly we do not take ample care of either. As a result, we hear cases of back aches, or deformations. ",
                "Vardaan Hospital in Gaya offers Spine surgery which is offered by very few hospitals. In the following paragraphs, we will try to summarise few of the common issues related to back and spines. In the coming months, Vardaan Hospital will also try to upload some videos on taking care of the back. Sitting and standing straight, for example, helps a lot and is easily achievable with some discipline.",
                "Backache is pretty common around the world. It can result from injury, activity and some medical conditions. Most common variant is acute low back pain results from injury to the muscles, ligaments, joints, or discs. Common causes in our day to day life are incorrect sitting positions, lifting heavy weights or bending/standing for long hours. ",
                "Don't ignore Back pains. They can sometime relate to nervous system and bone issues which need immediate attention",
                "Sometimes trauma, accidents or other medical condition require spinal surgery. Also, in certain cases of back pains, spine surgery may be your only treatment option. Sometimes, surgery is the only treatment for ailments. Vardaan Hospital has successfully treated several patients with spinal issues. By bringing spinal surgeries to Gaya, Vardaan has again proved itself to be the best orthopaedic centre in Gaya."
            ],
            url:"spine%20and%20backache%20surgery"
        },
        {
            post_name:"Complex Orthopaedics Trauma",
            post_content:[],
            url:"complex%20orthopaedics%20trauma"
        },
        {
            post_name:"Rheumatology",
            post_content:[],
            url:"rheumatology"
        }
    ]
)

export default PostMap

export type {IPost}