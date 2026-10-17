import type { Block } from "../lib/types";
import RichText from "./RichText";

const body =
  "text-[1.05rem] sm:text-lg text-ink-body leading-[1.8] mb-5 text-pretty";

export default function GuideBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <div>
      {blocks.map((block, index) => {
        if (block.type === "h2") {
          return (
            <h2
              key={index}
              className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-ink mt-12 mb-4"
            >
              {block.text}
            </h2>
          );
        }

        if (block.type === "h3") {
          return (
            <h3
              key={index}
              className="font-display text-xl font-medium tracking-tight text-ink mt-8 mb-3"
            >
              {block.text}
            </h3>
          );
        }

        if (block.type === "ul") {
          return (
            <ul key={index} className="my-6 space-y-3">
              {block.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="flex items-start text-[1.05rem] sm:text-lg text-ink-body leading-[1.75]"
                >
                  <span className="text-brand mr-2.5 mt-1" aria-hidden>
                    •
                  </span>
                  <span>
                    <RichText text={item} />
                  </span>
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p
            key={index}
            className={
              block.lead
                ? "text-xl sm:text-[1.35rem] text-ink leading-[1.55] mb-8 text-pretty"
                : body
            }
          >
            <RichText text={block.text} />
          </p>
        );
      })}
    </div>
  );
}
