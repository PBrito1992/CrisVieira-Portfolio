import { PortfolioItem } from "components/portfolio";
import blogPostsItems from "./blog-posts";
import brochureItems from "./brochure";
import designItems from "./design";
import ebookItems from "./ebook";
import logosItems from "./logos";
import mockupsItems from "./mockups";
import photoEditionItems from "./photo-edition";
import socialNetworksItems from "./social-networks";

const portfolioItems: PortfolioItem[] = [
    {
        filterId: "design",
        items: designItems
    },
    {
        filterId: "photoEdition",
        items: photoEditionItems
    },
    {
        filterId: "mockups",
        items: mockupsItems
    },
    {
        filterId: "logos",
        items: logosItems
    },
    {
        filterId: "socialNetworks",
        items: socialNetworksItems
    },
    {
        filterId: "blogPosts",
        items: blogPostsItems
    }, {
        filterId: "ebooks",
        items: ebookItems
    }, {
        filterId: "brochures",
        items: brochureItems
    },
];

export default portfolioItems;