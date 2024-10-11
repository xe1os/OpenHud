import { Match } from "../../api/interfaces";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { useState } from "react";

interface MatchCardProps {
  match: Match;
  deleteMatch: (id: string) => void;
  onEdit?: (match: Match) => void; // Added onEdit prop
}

export const MatchCard = ({ match, deleteMatch, onEdit }: MatchCardProps) => {
  const [isCopied, setIsCopied] = useState(false); // Flag to track copy state

  const handleCopyClick = (id: string) => {
    navigator.clipboard.writeText(id);
    setIsCopied(true); // Set copied flag to true
    setTimeout(() => {
      setIsCopied(false); // Reset copied flag after timeout
    }, 1250);
  };

  const handleEditClick = () => {
    if (onEdit) {
      onEdit(match); // Call onEdit prop function if provided
    }
  };

  return (
    <Card sx={{ display: "flex", position: "relative", width: {xs: "100%"}, height: "150px" }}>
      <Box sx={{ display: "flex", flexDirection: "column", width: { xs: "100%", xl: "50%" } }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {match.matchType}
          </Typography>
          <Typography variant="subtitle2" component="div" sx={{ color: "text.secondary" }}>
            {match.current}
          </Typography>
          {match.left && <Typography variant="subtitle1" component="div">{match.left.id}</Typography>}
          {match.right && <Typography variant="subtitle1" component="div">{match.right.id}</Typography>}
          <Button
            variant="contained" // Change variant based on copied flag
            color={isCopied ? "success" : "primary"} // Change color based on copied flag
            sx={{ width: "100%", fontSize: "12px" }}
            onClick={() => handleCopyClick(match.id)}
          >
            {!isCopied && match.id}
            {isCopied && "Copied!"}
          </Button>
        </CardContent>
      </Box>
      <Box
        sx={{
          position: "relative",
          display: { xs: "none", xl: "flex" },
          width: { xs: "0%", xl: "50%" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "6px" }}
          image={match.current ? "Current" : ""}
          alt={match.current ? "Current" : ""}
        />
      </Box>
      <Box sx={{ position: "absolute", display: "flex", flexDirection: "column", alignItems: 'end', top: 0, right: 0, width: "50%", fontSize: "12px", borderRadius: "6px", color: "text.primary" }}>
        <IconButton aria-label="edit" sx={{ color: "text.primary", p: "4px" }} onClick={() => handleEditClick()}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={() => deleteMatch(match.id)} sx={{ color: "text.primary", p: "4px" }}>
          <Delete />
        </IconButton>
      </Box>
    </Card>
  );
};