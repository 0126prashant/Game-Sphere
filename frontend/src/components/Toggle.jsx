import { Button, Box } from "@chakra-ui/react";
import { useState } from "react";
import { navArr, navArr2 } from "./constant";
function ToggleButton({ setToggleNav }) {
  const [currentPage, setCurrentPage] = useState("page1");

  const handlePageChange = (page, arr) => {
    setCurrentPage(page);
    setToggleNav && setToggleNav(arr);
  };

  return (
    <div style={{ display: "inline-block", }}>
      <Box
        display="flex"
        alignItems="center"
        borderWidth={1}
        borderRadius="full"
        overflow="hidden"
      >
        <Button
          colorScheme={currentPage === "page1" ? "blue" : "gray"}
          onClick={() => handlePageChange("page1", navArr)}
          flex="1"
          borderRadius="none"
        >
          RENT
        </Button>
        <Button
          colorScheme={currentPage === "page2" ? "blue" : "gray"}
          onClick={() => handlePageChange("page2", navArr2)}
          flex="1"
          borderRadius="none"
        >
          BUY
        </Button>
      </Box>


    </div>
  );
}

export default ToggleButton;
