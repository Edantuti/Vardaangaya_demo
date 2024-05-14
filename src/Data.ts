import Knee_replacement from './assets/After-Knee_replacement1.png';
import Arthroscopy from './assets/gallery/image4.jpg';
import Spine from './assets/Spine Surgery.png'
const PostMap:Map<string, {title:string, description:string, content:string[], image:string[]}> = new Map();

PostMap.set('total hip and knee replacement',{
  title:"Total Hip and Knee Replacement",
  description:"What is Total Hip and Knee Replacement?, What are the methods that undergo, during the process?.",
  content:[
          'Vardaan offers best hip and knee replacement in Gaya. We arrange best products from India, and we also ensure a quick recovery (called rehabilitation). Our patients start walking on their feet within 2 days of the surgery. Today, let us help you in understanding the hip and knee replacement.',
          'In a total hip replacement (also called total hip arthroplasty), the damaged bone and cartilage is removed and replaced with prosthetic components. The damaged femoral head is removed and replaced with a metal stem that is placed into the hollow centre of the femur.',
          'Similarly in total knee replacement, also known as knee arthroplasty, the weight-bearing surfaces of the knee joint are replaced to relieve pain and disability. It is most commonly performed for osteoarthritis, and also for other knee diseases such as rheumatoid arthritis and psoriatic arthritis.',
          'Knee replacement surgery can be performed as a partial or a total knee replacement. In general, the surgery consists of replacing the diseased or damaged joint surfaces of the knee with metal and plastic components shaped to allow continued motion of the knee. The best orthopaedic surgery in Gaya is offered in Vardaan where accurate alignment is our focus. Knee feels as new, without any pain and the patient is up on his/her feet within two days.',
        ],
  image:[Knee_replacement]
})

PostMap.set('arthroscopy & sports surgery',{
  title:'Arthroscopy & Sports Surgery',
  description:"What is Arthroscopy & Sports Surgery?, What are the methods that undergo, during the process?.",
  content:[
          'Vardaan provides timely and accurate diagnosis of all sports related injuries. It also provides best arthroscopy in Gaya. Sports are very important for overall well-being of a person, especially in the young age. Sons and daughters of Gaya have represented the state and country in various sports. However, the sports also sometimes causes sprains and other injuries. Vardaan Gaya addresses to these sports injuries on priority to ensure you are up and running (literally) in no time!',
          'Sports injuries itself is a broader term. Sports injuries are commonly caused by overuse, direct impact, or the application of force that is greater than the body part can structurally withstand. Common injuries include bruises, sprains, strains, joint injuries and nose bleeds. As you can guess, not all sports injuries are from playing sports!',
          'Sports injury in young children may cause lifelong deformities and scars if not treated timely',
        ],
  image:[Arthroscopy]
})

PostMap.set('spine and backache surgery',{
  title:'Spine and backache Surgery',
  description:"What is Spine and Backache Surgery?, What are the methods that undergo, during the process?.",
  content:[
          'Back is one of the most important muscle group in our body. Spine not only helps us in standing erect, but is also houses central nervous system important for our motor skills like walking. Sadly we do not take ample care of either. As a result, we hear cases of back aches, or deformations. ',
          'Vardaan Hospital in Gaya offers Spine surgery which is offered by very few hospitals. In the following paragraphs, we will try to summarise few of the common issues related to back and spines. In the coming months, Vardaan Hospital will also try to upload some videos on taking care of the back. Sitting and standing straight, for example, helps a lot and is easily achievable with some discipline.',
          'Backache is pretty common around the world. It can result from injury, activity and some medical conditions. Most common variant is acute low back pain results from injury to the muscles, ligaments, joints, or discs. Common causes in our day to day life are incorrect sitting positions, lifting heavy weights or bending/standing for long hours. ',
          "Don't ignore Back pains. They can sometime relate to nervous system and bone issues which need immediate attention",
          'Sometimes trauma, accidents or other medical condition require spinal surgery. Also, in certain cases of back pains, spine surgery may be your only treatment option. Sometimes, surgery is the only treatment for ailments. Vardaan Hospital has successfully treated several patients with spinal issues. By bringing spinal surgeries to Gaya, Vardaan has again proved itself to be the best orthopaedic centre in Gaya.',
        ],
  image:[Spine]
})

export {PostMap}

