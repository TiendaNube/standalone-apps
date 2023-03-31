import { Box, Text } from "@nimbus-ds/components";

const ExampleCard: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Box
      boxShadow={{ xs: "card", hover: "popover" }}
      borderRadius=".5rem"
      display="flex"
      flexDirection="column"
      overflow="hidden"
      transitionDuration="base"
      transitionProperty="box-shadow"
      transitionTimingFunction="ease-in-out"
      width="100%"
      flex={{
        xs: "0 0 100%",
        md: "0 0 calc(50% - 8px)",
        lg: "0 0 calc(25% - 12px)",
      }}
    >
      <Box
        width="100%"
        height="80px"
        backgroundColor="neutral-surfaceHighlight"
      />
      <Box p="4" backgroundColor="neutral-background">
        <Text fontWeight="bold">{title}</Text>
      </Box>
    </Box>
  );
};

export default ExampleCard;
