import { iteratorToStream, tokenize } from "@/lib/stream/buildStream";
// import path from "path";

export const runtime = "edge";

const text = `# The Adventure of Sir Arthur and the Enchanted Forest

Once upon a time, in the **Kingdom of Eldoria**, there lived a valiant knight named _Sir Arthur_. He was renowned throughout the land for his unwavering courage and noble heart. Sir Arthur had a burning desire for adventure, and his latest quest led him to the mystical **Enchanted Forest**.

## The Mysterious Forest

The Enchanted Forest was a place of legends and mysteries. It was said to be inhabited by magical creatures, ancient spirits, and hidden treasures beyond imagination. Its towering trees had leaves that shimmered like **emeralds** in the sunlight, and its streams whispered secrets to those who listened.

One sunny morning, Sir Arthur set out on his noble steed, a magnificent white stallion named _Valiant_. Armed with his trusty sword and clad in shining armor, he entered the forest, determined to uncover its secrets.

## The Talking Animals

As Sir Arthur ventured deeper into the Enchanted Forest, he encountered a remarkable sight. Animals, unlike any he had ever seen, approached him. Squirrels with sparkling tails, rabbits that glowed with a soft radiance, and birds that sang in harmonious melodies surrounded him.

They spoke to him in a language only he could understand. They revealed that the forest was under a powerful enchantment, and only a true-hearted knight could break the spell and restore its natural balance. Sir Arthur, fueled by his sense of duty and love for the natural world, agreed to help.

## The Trials of Courage

The forest presented Sir Arthur with a series of trials that tested his courage, wisdom, and compassion. He had to solve riddles from ancient tree spirits, rescue a trapped unicorn from a thorny thicket, and befriend a mischievous forest sprite to earn their trust.

Throughout his journey, Sir Arthur showed unwavering determination and kindness, and he formed deep bonds with the enchanted creatures. With their guidance and support, he grew as a knight and as a person.

## The Final Confrontation

After overcoming many trials, Sir Arthur faced the ultimate challenge—an encounter with the **Forest Guardian**, a colossal, ancient tree with eyes that shone like stars. The guardian held the key to breaking the enchantment.

In a battle of wills and strength, Sir Arthur proved himself worthy. He shared his stories, sang songs of the forest, and revealed his pure heart. The guardian, moved by his sincerity, granted him a magical amulet that could dispel the enchantment.

## The Enchantment Broken

Returning to the heart of the Enchanted Forest, Sir Arthur used the amulet to break the spell. The forest transformed before his eyes. The shimmering leaves turned into a myriad of colors, and the animals danced in joy. The Enchanted Forest was free once more.

## A Hero's Return

Sir Arthur emerged from the forest, hailed as a hero by the kingdom. He had not only saved the Enchanted Forest but had also learned valuable lessons about the importance of compassion, humility, and the interconnectedness of all living things.

From that day on, Sir Arthur continued to protect the kingdom, but he never forgot the magical adventure that had taught him the true meaning of courage and love for nature. And so, his legend lived on, inspiring generations to come.

---

_This tale reminds us that true heroes are not defined by their strength alone but by their kindness, empathy, and willingness to protect the wonders of our world._`.trim();

export async function GET() {
  const tokens = tokenize(text);
  const stream = iteratorToStream(tokens);

  return new Response(stream);
}
