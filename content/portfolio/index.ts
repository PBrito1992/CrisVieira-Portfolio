import { PortfolioItem } from "components/portfolio";
import blogPostsItems from "./blog-posts";
import designItems from "./design";
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
    },
];

export default portfolioItems;